// handling the promise using then...catch block

console.log("Posts from dummyjson");
fetch("https://dummyjson.com/posts")
  .then(res => res.json())
  .then(data => console.log(data.posts))
  .catch(err => console.error(err));

console.log("author: Niladri Saha");