const products = [
  { id: 1, name: "Premium Sneakers", price: 3200, image: "images/sneakers.jpg" },
  { id: 2, name: "Smart Watch", price: 5999, image: "images/watch.jpg" },
  { id: 3, name: "Bluetooth Speaker", price: 2199, image: "images/speaker.jpg" },
  { id: 4, name: "Wireless Headphones", price: 3999, image: "images/headphones.jpg" }
];

window.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  if (productList) {
    products.forEach(p => {
      productList.innerHTML += `
        <div class="card">
          <img src="${p.image}" width="100%">
          <h3>${p.name}</h3>
          <p>PKR ${p.price}</p>
          <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      `;
    });
  }
});
