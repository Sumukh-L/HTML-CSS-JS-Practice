const book= document.getElementById("book1");
const row = book.parentElement;

const coverPage= document.createElement("div");
coverPage.className= "coverpage";
coverPage.innerHTML= "Hi how are you";

const addCoverPage= (e) => {
    row.appendChild(coverPage);
};

book.addEventListener("click", addCoverPage);

