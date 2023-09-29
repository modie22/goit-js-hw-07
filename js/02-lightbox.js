import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryImgItems = ({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>
    `;
};
const elements = galleryItems.map(galleryImgItems).join("");
galleryEl.insertAdjacentHTML("afterbegin", elements);

const gallery = new SimpleLightbox("ul.gallery a");
gallery.options.captionsData = "alt";
gallery.options.captionDelay = 250;
