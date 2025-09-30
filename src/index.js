const BASE_KEY = 'https://pixabay.com/api/videos/';

const key = '41049640-829f762a75e1c211b0430ce74';



const searchForm = document.querySelector('.search-form');
let searchName = '';

searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
    e.preventDefault();
    searchName = e.currentTarget.searchQuery.value;
    
}