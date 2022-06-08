import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createElementOfGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createElementOfGallery(elements) {
  return galleryItems.map(({preview, original, description}) => { 
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
})
  .join()
};


function onGalleryContainerClick(e) { 
   e.preventDefault();
   const modal = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
   `)

  modal.show();
};










    










