const KEY = '41049640-829f762a75e1c211b0430ce74'
const BASE_URL = 'https://pixabay.com/api/';
let query = '';

const searchForm = document.querySelector('.search-form');


// Створюємо контейнер для галереї
let gallery = document.getElementById('gallery');
if (!gallery) {
  gallery = document.createElement('div');
  gallery.id = 'gallery';
  document.body.appendChild(gallery);
}

// Подія на форму
searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
  e.preventDefault();
  query = e.currentTarget.searchQuery.value.trim();

  if (!query) {
    alert('Введіть пошуковий запит!');
    return;
  }

  fetchImages(query, 1, 12)
    .then(data => renderGallery(data.hits))
    .catch(err => console.error(err));
}

// Функція запиту до Pixabay
async function fetchImages(query, page, perPage) {
  const url = `${BASE_URL}?key=${KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(res.status);
  return res.json();
}

// Функція створення галереї
function renderGallery(images) {
  gallery.innerHTML = ''; // очищаємо старі зображення

  images.forEach(img => {
    const item = document.createElement('div');
    item.classList.add('gallery-item');

    const image = document.createElement('img');
    image.src = img.webformatURL;
    image.alt = img.tags;
    image.width = 250;

    item.appendChild(image);
    gallery.appendChild(item);
  });
}
