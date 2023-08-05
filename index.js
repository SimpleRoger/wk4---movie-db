// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const postListEl = document.querySelector(".post-list");
let loginForm = document.getElementById("loginForm");
let movie;

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");

  if (username.value == "") {
    alert("Ensure you input a value in both fields!");
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

userListEl = document.querySelector(".user-list");

async function main() {
  const movies = await fetch(
    `http://www.omdbapi.com/&apikey=18b5ee41&s=${movie}`
  );
  const moviesData = await movies.json();
  console.log(moviesData.Search);
  userListEl.innerHTML = moviesData.Search.map((movie) => {
    // const users1 = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=18b5ee41&s=${movie}`);
    userHTML(movie);
  }).join("");
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

function userHTML(movie) {
  return `<div class="user-card" onclick = "showUsersPosts(${movie.id})">
  <div class="user-card__container">
  <h3>${movie.Title}</h4>
   <img src = "${movie.Poster}">
    <p><b>Year:</b> ${movie.Year}</p>
  </div>
</div>`;
}
main();
