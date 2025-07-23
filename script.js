let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product.name + " added to cart!");
}

window.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cart-items");
  if (cartItems) {
    let total = 0;
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
      total += item.price;
      cartItems.innerHTML += `
        <div class="card">
          <h4>${item.name}</h4>
          <p>PKR ${item.price}</p>
          <button onclick="removeItem(${index})">Remove</button>
        </div>`;
    });
    document.getElementById("total").innerText = "Total: PKR " + total;
  }

  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Order placed successfully! (Fictional)");
      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.href = "index.html";
    });
  }
});

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
