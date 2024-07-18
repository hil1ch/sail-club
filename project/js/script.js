let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let articleSections = document.querySelectorAll('.blog-article.short');
let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');
let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('li a');

darkThemeButton.onclick = function () {
   document.body.classList.add('dark');
   darkThemeButton.classList.add('active');
   lightThemeButton.classList.remove('active');
};

lightThemeButton.onclick = function () {
   document.body.classList.remove('dark');
   lightThemeButton.classList.add('active');
   darkThemeButton.classList.remove('active');
};

serifFontButton.onclick = function () {
   document.body.classList.add('serif');
   sansSerifFontButton.classList.remove('active');
   serifFontButton.classList.add('active');
};

sansSerifFontButton.onclick = function () {
   document.body.classList.remove('serif');
   sansSerifFontButton.classList.add('active');
   serifFontButton.classList.remove('active');
};

for (let articleSection of articleSections) {
  let moreButton = articleSection.querySelector('.more');
  moreButton.onclick = function () {
    articleSection.classList.remove('short');
  };
}

gridViewButton.onclick = function () {
   cardsList.classList.remove('list');
   gridViewButton.classList.add('active');
   listViewButton.classList.remove('active');
};
 
 listViewButton.onclick = function () {
   cardsList.classList.add('list');
   gridViewButton.classList.remove('active');
   listViewButton.classList.add('active');
};

for (let activeImage of previews) {
  activeImage.onclick = function (evt) {
  evt.preventDefault();
  activePhoto.src = activeImage.href;

  let currentActive = document.querySelector('li .active-item');
  currentActive.classList.remove('active-item');
  activeImage.classList.add('active-item');
  };
}