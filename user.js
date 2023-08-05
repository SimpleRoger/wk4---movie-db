
async function onSearchChange(event) {
    const id = event.target.value;
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json()
    console.log(postsData)

    postListEl.innerHTML = postsData.map(post => `
    <div class="post">
        <div class="post__title">
        ${post.title}
        </div>
        <p class="post__body">
        ${post.body}
        </p>
  </div>
    `).join('');
}
async function main() {
    const id = localStorage.getItem("id")
    const posts = await fetch(`http://www.omdbapi.com/apikey=18b5ee41&s=fast`)
    const postsData = await posts.json()
    console.log(postsData)

    postListEl.innerHTML = postsData.map(post => `
    <div class="post">
        <div class="post__title">
        ${post.title}
        </div>
        <p class="post__body">
        ${post.body}
        </p>
  </div>
   
    `).join('');
}


main()