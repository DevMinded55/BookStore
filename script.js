function renderBooks() {
    let bookList = document.getElementById("books");
    for (let i = 0; i < books.length; i++) {
        bookList.innerHTML += getBooks(i);
        renderBookComments(i);
        priceToFloat(i);
    }
}

function toggleLikedBooks(i) {
    likedBook = document
        .getElementById(`favIcon${[i]}`)
        .classList.add("d-none");
    unlikedBook = document
        .getElementById(`favedIcon${[i]}`)
        .classList.remove("d-none");
    likesOnBook = document.getElementById(`book-likes${[i]}`);
    let currentLikes = parseInt(likesOnBook.innerHTML);
    likesOnBook.innerHTML = currentLikes + 1;
}

function toggleUnlikedBooks(i) {
    likedBook = document
        .getElementById(`favIcon${[i]}`)
        .classList.remove("d-none");
    unlikedBook = document
        .getElementById(`favedIcon${[i]}`)
        .classList.add("d-none");
    likesOnBook = document.getElementById(`book-likes${[i]}`);
    let currentLikes = parseInt(likesOnBook.innerHTML);
    likesOnBook.innerHTML = currentLikes - 1;
}

function priceToFloat(i) {
    bookPrice = document.getElementById(`book-price${[i]}`);
    floatPrice = parseFloat(bookPrice.innerHTML).toFixed(2);
    bookPrice.innerHTML = floatPrice + " €";
}

function renderBookComments(i) {
    let commentsRef = document.getElementById(`bookComments${i}`);
    let comments = books[i].comments;

    for (let k = 0; k < comments.length; k++) {
        commentsRef.innerHTML += `
            <p style="font-weight:bold">${comments[k].name}:</p>
            <p>${comments[k].comment}</p>
            <br>
        `;
    }
}