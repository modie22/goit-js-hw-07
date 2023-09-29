import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryImgItems = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}" >
  <img src="${preview}"data-source="${original}" alt="${description}" class="gallery__image"/>
  </a>
  </li>
    `;
};
const elements = galleryItems.map(galleryImgItems).join("");
galleryEl.insertAdjacentHTML("afterbegin", elements);

galleryEl.addEventListener("click", onlinkEl);

function onlinkEl(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `
    <img
    src="${evt.target.dataset.source}"
    alt="${evt.target.getAttribute("alt")}"
    />
  `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscPress);
        instance.element().querySelector("img").onclick = instance.close;
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscPress);
      },
    }
  );

  function onEscPress(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
}
