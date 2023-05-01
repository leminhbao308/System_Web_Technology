var quantity = document.getElementById("quantity-cart");
var cartID = document.getElementById("cartID");
var popup = document.getElementById("popup");
// hover cart
cartID.addEventListener('mouseenter', () => {
    if (parseInt(quantity.innerText) === 0) {
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.innerHTML = "No products in the cart.";
        popup.style.height = "100px";
    } else {
        popup.style.display = "flex";
    }
})
cartID.addEventListener('mouseleave', () => {
    if (parseInt(quantity.innerText) === 0) {
        popup.style.display = "none";
    } else {
        popup.style.display = "none";
        popup.addEventListener('mouseleave', () => {
            popup.style.display = "none";
        })
    }
})

var btn_addToCart = document.getElementById("btn_addToCart")
btn_addToCart.addEventListener("click", () => {
    if (btn_addToCart.innerText == "ADD TO CART") {
        quantity.innerText = 1;
        btn_addToCart.innerText = "VIEW CART"
    }
    else if (btn_addToCart.innerText == "VIEW CART") {
        window.location.href = "/html/cart/cart.html";
    }

    console.log(btn_addToCart.innerText)
})

var viewCartInCartPopup = document.getElementById("viewCartInCartPopup")
viewCartInCartPopup.addEventListener("click", () => {
    window.location.href = "/html/cart/cart.html";
})

var close_cart = document.getElementById("close_cart");
close_cart.addEventListener("click", (e) => {
    e.preventDefault();
    quantity.innerText = 0
    btn_addToCart.innerText = "ADD TO CART"
})