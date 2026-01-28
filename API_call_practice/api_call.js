const searchBtn= document.getElementById("submitButton");
const searchBar= document.getElementById("searchBar");
const modal = document.getElementById("myModal");
const modalContent= document.getElementById("modal-content");

searchBtn.addEventListener("click", searchBooks);

searchBar.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
        searchBooks();
    }
});

async function searchBooks() {
    const query= searchBar.value.trim();

    if(!query){
        alert("Please Enter a book name!");
        return;
    }
    
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
    const res= await fetch(url);
    const data= await res.json();

    displayBooks(data.docs);
    modal.style.display = "block";
}

function displayBooks(books){
    modalContent.innerHTML= "";

    if(books.length==0){
        modalContent.textContent= "No results found";
        return;
    }

    books.slice(0,5).forEach(book => {
        const title= book.title;
        const author= book.author_name?.[0] || "Unknown author";
        const year= book.first_publish_year || "NA";

        const coverURL = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : null;

            
        const bookDiv = document.createElement("div");
        bookDiv.style.marginBottom = "2rem";

        bookDiv.innerHTML = `
        ${coverURL ? `<img src="${coverURL}" />` : ""}
        <h3>${title}</h3>
        <p>${author}</p>
        <p>${year}</p>
        `;

        modalContent.appendChild(bookDiv);
    });
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}