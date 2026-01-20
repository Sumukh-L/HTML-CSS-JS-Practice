const bookContent = {
    "book1": "This is book1",
    "book2": "This is book2",
    "book3": "This is book3",
    "book4": "This is book4",
    "book5": "This is book5"
};

const books = document.querySelectorAll(".book");

books.forEach((book) => {
    book.addEventListener("click", (event) => {
        const clickedBook = event.currentTarget;
        const bookId = clickedBook.id; 
        
        const coverPage = document.createElement("div");
        coverPage.className = "coverpage";
        
        coverPage.innerHTML = bookContent[bookId] ;

        clickedBook.parentElement.appendChild(coverPage);
    });
});
