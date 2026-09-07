import axios from "axios";

export function getImagesByQuery(query) {
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: "57499055-067e65e2e7e3e863d9f3345d3",
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
        },
    })
    .then(response => response.data)
};