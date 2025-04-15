function getBooks(i) {
    return `<div class="book-card">
                        <h3>${books[i].name}</h3>
                        <img
                            src="./assets/img/book.jpg"
                            alt="Buchcover ${[i + 1]}"
                        />
                        <div class="like-price">
                        <p id="book-price${[i]}" class="price">${
        books[i].price
    }</p>
                        <div>
                        <p id="book-likes${[i]}"> ${books[i].likes}</p>
                        <img onclick="toggleLikedBooks(${[i]})" id="favIcon${[
        i,
    ]}" src="./assets/icons/Fav.png" alt="">
                        <img onclick="toggleUnlikedBooks(${[
                            i,
                        ]})" id="favedIcon${[
        i,
    ]}" class="d-none" src="./assets/icons/liked.png" alt="">
                        </div>
                        </div>
                        <div class="book-info">
                        <p>Author: ${books[i].author}</p>
                        <p>Erscheinungsjahr: ${books[i].publishedYear}</p>
                        <p>Genre: ${books[i].genre}</p>
                        </div>
                        <h3>Kommentare<h3>
                        <div >
                        <div class="textbox" id="bookComments${[i]}">
                        </div>
                        <div class="write-comment">
                        <input id="comment-input" type="text">
                        <button>Senden</button>
                        </div>
                        </div>
                    </div>`;
}