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
let popularurl = "http://openlibrary.org/subjects/popular.json?limit=10";

let booksContainer = document.getElementById("booksContainer");
let loader = document.getElementById("loader");
let inputField = document.getElementById("searchInput");

window.onload = switchBooks(popularurl);


function switchBooks(url) {
    booksContainer.innerHTML="";
    loader.style.display="block";

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let booksarray = data.works;
            for (let i=0; i<booksarray.length; i++) {
                let bookTitle = booksarray[i].title;
                let bookAuthors = booksarray[i].authors[0].name;
                let newElement = document.createElement("div");
                newElement.innerHTML = "<div class='grid-item'><span>" + bookTitle + ", " + "<br>" +bookAuthors+ "</span></div>";
                booksContainer.appendChild(newElement);
            }
        loader.style.display="none";
        })
        .catch((err) => {
            console.log(err, "there is an error!")
        });
}


function search () {
    let inputValue = inputField.value;
    let searchurl = "http://openlibrary.org/search.json?q=" + inputValue + "&limit=10";
    loader.style.display="block";

    booksContainer.innerHTML="";
    fetch(searchurl)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let booksarray = data.docs;
            for (let i=0; i<booksarray.length; i++) {
                let bookTitle = booksarray[i].title;
                let bookAuthor = booksarray[i].author_name[0];
                let newElement = document.createElement("div");
                newElement.innerHTML = "<div class='grid-item'><span>" + bookTitle + ", "+ "<br>" + bookAuthor+"</span></div>";
                booksContainer.appendChild(newElement);
                inputField.value="";
            }
            loader.style.display="none";
        })
        .catch((err) => {
            console.log(err, "there is an error!")
        });
}



