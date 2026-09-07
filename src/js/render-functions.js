import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox(".gallery a");

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
loader.style.display = "none";

export function createGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
          </a>
          <div class="info">
            <p>Likes:<span>${likes}</span></p>
            <p>Views:<span>${views}</span></p>
            <p>Comments:<span>${comments}</span></p>
            <p>Downloads:<span>${downloads}</span></p>
          </div>
        </li>
      `;
    }).join("");
        
    gallery.innerHTML = markup;
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader.style.display = "block";
}

export function hideLoader() {
    loader.style.display = "none";
}