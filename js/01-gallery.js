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
 /* const isGalleryImg = e.target.classlist.contains('gallery_image');
  if (!isGalleryImg) {
    return;
  }*/
  
  const selectedImg = e.target.dataset.source;
  const modal = basicLightbox.create(`
    <div class="modal">
       <img src="${selectedImg}">
    </div>
   `)

  modal.show();
  

};
/*window.addEventListener('keydown', onEscPress);

function onEscPress(e) {
  if (e.code === 'Escape') {
    modal.close();
  }
};*/










    










