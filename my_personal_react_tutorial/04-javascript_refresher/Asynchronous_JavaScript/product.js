// handling the promise using async...await

console.log("All product details:");
async function getProducts(){
  try{
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data.products);
    // return data.products;
  }catch(err){
    console.error(err.message);
  }
}

getProducts();
console.log("Author: Niladri Saha");