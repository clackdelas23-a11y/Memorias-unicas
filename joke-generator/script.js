const API = 'https://v2.jokeapi.dev/joke';
const getJokeBtn = document.getElementById('getJoke');
const categorySelect = document.getElementById('category');
const safeOnlyCheckbox = document.getElementById('safeOnly');
const jokeCard = document.getElementById('jokeCard');
const jokeText = document.getElementById('jokeText');
const revealBtn = document.getElementById('reveal');
const statusEl = document.getElementById('status');
const copyBtn = document.getElementById('copyBtn');
const tweetLink = document.getElementById('tweetLink');
const addFavBtn = document.getElementById('addFav');

const viewFavsBtn = document.getElementById('viewFavs');
const favPanel = document.getElementById('favPanel');
const closeFavsBtn = document.getElementById('closeFavs');
const favListEl = document.getElementById('favList');
const clearFavsBtn = document.getElementById('clearFavs');
const noFavsEl = document.getElementById('noFavs');
const favCountEl = document.getElementById('favCount');

const STORAGE_KEY = 'joke-favorites-v1';
let favorites = [];
let currentJoke = null; // { id, text, raw }

function setStatus(text='') { statusEl.textContent = text; }

function buildUrl(category, safeOnly) {
  const blacklist = safeOnly ? 'blacklistFlags=nsfw,religious,political,sexist,explicit' : '';
  const params = [blacklist, 'type=single,twopart'].filter(Boolean).join('&');
  return `${API}/${encodeURIComponent(category)}?${params}`;
}

function jokeToText(data) {
  if (!data) return '';
  if (data.type === 'single') return data.joke;
  return `${data.setup}\n\n${data.delivery}`;
}

function makeId(data) {
  // JokeAPI provides an id field; fallback to timestamp
  return data.id ?? `joke-${Date.now()}`;
}

async function fetchJoke() {
  const url = buildUrl(categorySelect.value, safeOnlyCheckbox.checked);
  setStatus('A carregar…');
  getJokeBtn.disabled = true;
  jokeCard.classList.add('hidden');
  revealBtn.classList.add('hidden');

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Erro na resposta da API');
    const data = await res.json();
    if (data.error) throw new Error(data.message || 'Erro da API');

    const text = jokeToText(data);
    const id = makeId(data);
    currentJoke = { id, text, raw: data };

    if (data.type === 'single') {
      jokeText.textContent = text;
      revealBtn.classList.add('hidden');
      jokeCard.classList.remove('hidden');
    } else if (data.type === 'twopart') {
      jokeText.textContent = data.setup;
      revealBtn.classList.remove('hidden');
      jokeCard.classList.remove('hidden');
      revealBtn.onclick = () => {
        jokeText.textContent = `${data.setup}\n\n${data.delivery}`;
        revealBtn.classList.add('hidden');
      };
    }

    copyBtn.onclick = () => {
      navigator.clipboard?.writeText(text || '')
        .then(() => setStatus('Piada copiada para a área de transferência'))
        .catch(() => setStatus('Não foi possível copiar'));
    };

    tweetLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text || '')}`;

    // update add fav button state
    addFavBtn.disabled = false;
    addFavBtn.setAttribute('aria-pressed', isFavorited(id) ? 'true' : 'false');

    setStatus('');
  } catch (err) {
    console.error(err);
    setStatus('Erro a obter piada — tenta novamente.');
  } finally {
    getJokeBtn.disabled = false;
  }
}

function loadFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    favorites = raw ? JSON.parse(raw) : [];
  } catch {
    favorites = [];
  }
  renderFavCount();
}

function saveFavorites() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  renderFavCount();
}

function isFavorited(id) {
  return favorites.some(f => f.id === id);
}

function addFavorite() {
  if (!currentJoke) return;
  if (isFavorited(currentJoke.id)) {
    setStatus('Já está nos favoritos');
    return;
  }
  const entry = {
    id: currentJoke.id,
    text: currentJoke.text,
    addedAt: new Date().toISOString()
  };
  favorites.unshift(entry);
  saveFavorites();
  setStatus('Adicionado aos favoritos');
  addFavBtn.setAttribute('aria-pressed', 'true');
}

function removeFavorite(id) {
  favorites = favorites.filter(f => f.id !== id);
  saveFavorites();
  renderFavorites();
  setStatus('Removido dos favoritos');
  if (currentJoke && currentJoke.id === id) addFavBtn.setAttribute('aria-pressed', 'false');
}

function clearFavorites() {
  if (!confirm('Limpar todos os favoritos?')) return;
  favorites = [];
  saveFavorites();
  renderFavorites();
  setStatus('Favoritos limpos');
}

function renderFavCount() {
  favCountEl.textContent = favorites.length;
}

function renderFavorites() {
  favListEl.innerHTML = '';
  if (favorites.length === 0) {
    noFavsEl.classList.remove('hidden');
    return;
  } else {
    noFavsEl.classList.add('hidden');
  }

  favorites.forEach(f => {
    const li = document.createElement('li');
    li.className = 'fav-item';

    const textDiv = document.createElement('div');
    textDiv.className = 'fav-text';
    textDiv.textContent = f.text;

    const meta = document.createElement('div');
    meta.className = 'fav-meta';

    const time = document.createElement('small');
    time.className = 'muted';
    time.textContent = new Date(f.addedAt).toLocaleString();

    const restoreBtn = document.createElement('button');
    restoreBtn.className = 'remove-btn';
    restoreBtn.textContent = 'Restaurar';
    restoreBtn.title = 'Mostrar esta piada';
    restoreBtn.onclick = () => {
      // show in main card
      currentJoke = { id: f.id, text: f.text, raw: null };
      jokeText.textContent = f.text;
      revealBtn.classList.add('hidden');
      jokeCard.classList.remove('hidden');
      addFavBtn.setAttribute('aria-pressed', 'true');
      closeFavPanel();
      setStatus('Piada restaurada do favoritos');
    };

    const delBtn = document.createElement('button');
    delBtn.className = 'remove-btn';
    delBtn.textContent = 'Remover';
    delBtn.onclick = () => removeFavorite(f.id);

    meta.appendChild(time);
    meta.appendChild(restoreBtn);
    meta.appendChild(delBtn);

    li.appendChild(textDiv);
    li.appendChild(meta);
    favListEl.appendChild(li);
  });
}

/* Favorites panel controls */
function openFavPanel() {
  renderFavorites();
  favPanel.classList.remove('hidden');
  favPanel.focus();
  // trap simple focus (basic)
  document.addEventListener('keydown', onEscClose);
}

function closeFavPanel() {
  favPanel.classList.add('hidden');
  document.removeEventListener('keydown', onEscClose);
}

function onEscClose(e) {
  if (e.key === 'Escape') closeFavPanel();
}

/* Event wiring */
getJokeBtn.addEventListener('click', fetchJoke);
addFavBtn.addEventListener('click', addFavorite);
viewFavsBtn.addEventListener('click', openFavPanel);
closeFavsBtn.addEventListener('click', closeFavPanel);
clearFavsBtn.addEventListener('click', clearFavorites);

// initial load
loadFavorites();
fetchJoke();
