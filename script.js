const GIPHY_API_KEY = "wh5uRjM4eEf4TI27kDvLDS6Fh7U4qqud";
const GIPHY_API_URL = "https://api.giphy.com/v1/gifs/search";

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const gifContainer = document.getElementById('gifContainer');
    const clearButton = document.getElementById('clearButton');

    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        gifContainer.innerHTML = '';
    });

    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value;
        const url = `${GIPHY_API_URL}?api_key=${GIPHY_API_KEY}&q=${searchTerm}&limit=${10}`;

        fetch(url)
            .then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData);
                jsonData.data.forEach((gif) => {
                    const gifElement = document.createElement("img");
                    gifElement.src = gif.images.fixed_width.url;
                    gifContainer.appendChild(gifElement);
                });
            })
            .catch((error) => {
                console.error("Error fetching GIFs:", error);
            });
    });
});

