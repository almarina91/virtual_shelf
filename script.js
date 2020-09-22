let firstBooksMap = new Map();
firstBooksMap.set("Girl with a pearl earring", "https://openlibrary.org/books/OL41076M.json");
firstBooksMap.set("Broken People", "https://openlibrary.org/books/OL28349977M.json");
firstBooksMap.set("Solaris","https://openlibrary.org/books/OL5219384M.json");
firstBooksMap.set("2030","https://openlibrary.org/works/OL16476135W.json");
firstBooksMap.set("Six days of the condor","https://openlibrary.org/works/OL2455841W.json");
firstBooksMap.set("Borne","https://openlibrary.org/works/OL17762236W.json");
firstBooksMap.set("Foundation and Earth","https://openlibrary.org/works/OL46347W.json");
firstBooksMap.set("Ancillary Justice","https://openlibrary.org/works/OL17062644W.json");
firstBooksMap.set("The Three Body Problem","https://openlibrary.org/works/OL17335914W.json");
firstBooksMap.set("Death's End","https://openlibrary.org/books/OL26805048M.json");

window.onload = function() {
    for (let value of firstBooksMap.values()) {
    fetch(value)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let bookTitle = data.title;
            let booksContainer = document.getElementById("booksContainer");
            let newElement = document.createElement("div");
            newElement.innerHTML = "<div class='grid-item'><span>" + bookTitle + "</span></div>";

            booksContainer.appendChild(newElement);
        })
        .catch((err) => {
            console.log(err, "there is an error!")
        });
    }
};

let kidsurl = "http://openlibrary.org/subjects/children.json?limit=10";
let fantasyurl = "http://openlibrary.org/subjects/fantasy.json?limit=10";
let horrorurl = "http://openlibrary.org/subjects/horror.json?limit=10";
let historyurl = "http://openlibrary.org/subjects/history.json?limit=10";
let romanceurl = "http://openlibrary.org/subjects/romance.json?limit=10";
let poetryurl = "http://openlibrary.org/subjects/poetry.json?limit=10";
let biographyurl = "http://openlibrary.org/subjects/biography.json?limit=10";
let classicsurl = "http://openlibrary.org/subjects/classics.json?limit=10";
let cookbookurl = "http://openlibrary.org/subjects/cookbook.json?limit=10";
let comicsurl = "http://openlibrary.org/subjects/comics.json?limit=10";

function switchBooks(url) {
    let booksContainer = document.getElementById("booksContainer");
    booksContainer.innerHTML="";
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let booksarray = data.works;
            for (let i=0; i<booksarray.length; i++) {
                let bookTitle = booksarray[i].title;
                let booksContainer = document.getElementById("booksContainer");
                let newElement = document.createElement("div");
                newElement.innerHTML = "<div class='grid-item'><span>" + bookTitle + "</span></div>";
                booksContainer.appendChild(newElement);
            }
        })
        .catch((err) => {
            console.log(err, "there is an error!")
        });
}



