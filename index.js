// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

// const postListEl = document.querySelector(".post-list");
// let loginForm = document.getElementById("loginForm");
let movie;
userListEl = document.querySelector(".user-list");
const searchResults = document.querySelector(".search__results");
const loading = document.querySelector(".movies__loading--spinner");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");

  if (username.value == "") {
    alert("Please enter a movie");
  } else {
    // perform operation with form input
    // alert("This form has been successfully submitted!")
    movie = username.value;
    console.log(movie);
    // showUsersPosts()
    main();
    // console.log(
    //   `This form has a username of ${username.value}`
    // );

    // username.value = "";
  }
});

function filterMovies(event) {
  main(event.target.value);
  // console.log("HI")
}

async function main(filter) {
  loading.classList += " movies__loading";
  const movies = await fetch(
    `http://www.omdbapi.com/?apikey=18b5ee41&s=${movie}`
  );
  const moviesData = await movies.json();
  console.log(moviesData.Search);
  searchResults.innerHTML = "Search results For: " + `${movie}`;
  userListEl.innerHTML = moviesData.Search.map((movie) => {
    // const users1 = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=18b5ee41&s=${movie}`);
    return userHTML(movie);
  }).join("");
  loading.remove("movies__loading");

  if (filter === "OLD_TO_NEW") {
    console.log("HI");
    moviesData.Search.sort((a, b) => a.Year - b.Year);
    userListEl.innerHTML = moviesData.Search.map((movie) => {
      // const users1 = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=18b5ee41&s=${movie}`);
      return userHTML(movie);
    }).join("");
  } else if (filter === "NEW_TO_OLD") {
    moviesData.Search.sort((a, b) => b.Year - a.Year);
    userListEl.innerHTML = moviesData.Search.map((movie) => {
      // const users1 = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=18b5ee41&s=${movie}`);
      return userHTML(movie);
    }).join("");
  }
  // movies.search(event)
}

function userHTML(movie) {
  return `<div class="user-card" onclick = "showUsersPosts(${movie.id})">
  <div class="user-card__container">
  <h3 class = "fixed-text">${movie.Title}</h3>
   <img src = "${movie.Poster}" class = "movie__image">
    <p><b>Year:</b> ${movie.Year}</p>
  </div>
</div>`;
}
// async function showUsersPosts(id) {
//   localStorage.setItem("id", id);
//   const id1 = localStorage.getItem("id")
//   console.log(id1)
//   const users = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=18b5ee41&s=${id1}`);
//   const usersData = await users.json();
//   console.log(usersData.Search);
//   userListEl.innerHTML = usersData.Search.map(
//     (user) => userHTML(user))
//   .join("");
//   // window.location.href = `${window.location.origin}/user.html`
//   console.log(id1);
// }

// main();
