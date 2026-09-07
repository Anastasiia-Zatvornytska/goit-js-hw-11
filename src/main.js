import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {getImagesByQuery} from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const query = event.currentTarget.elements["search-text"].value.trim();
    event.currentTarget.elements["search-text"].value = "";

    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then(data => {
        hideLoader();
        if (data.hits.length === 0) {
            iziToast.error({
    title: "Error",
    message: "Sorry, there are no images matching your search query. Please try again!"
            });
            return;
    }
    createGallery(data.hits);
        })
        
    .catch(error => {
        hideLoader();
        
    iziToast.error({
    title: "Error",
    message: "Something went wrong. Please try again later.",
  });
  });
})