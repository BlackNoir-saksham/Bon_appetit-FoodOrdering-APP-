import React, { useState } from "react";
import "./Home.css";
import { FaCartArrowDown } from "react-icons/fa";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function Home() {
  const scroll = () => {
    window.scrollTo({ top: 1500, behavior: "smooth" });
    console.log("Scrolled successfully");
  };

  const [cart, setCart] = useState([]);

  const [page, setPage] = useState(PAGE_PRODUCTS);

  const addToCart = (meals) => {
    console.log("Added in Cart");
    setCart([...cart, { ...meals }]);
  };

  const removeFromCart = (productToRemove) => {
    console.log("Removed from Cart");
    setCart(cart.filter((meals) => meals !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div>
      <div className="background">
        <div className="intro">
          <h2>Restaurants in your pocket</h2>
          <p>
            Restaurants in your pocket Order from your favorite restaurants &
            track on the go, with the all-new Swiggy app.
          </p>
        </div>
        <div className="choose">
          <button onClick={scroll}>
            <span>Choose</span>What to eat Today
          </button>
        </div>
      </div>
      <button onClick={() => navigateTo(PAGE_CART)}>
        Go To Cart ({cart.length})
      </button>
      <div>
        {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
        {page === PAGE_CART && <Cart removeFromCart={removeFromCart} cart={cart} navigateTo={navigateTo} PAGE_PRODUCTS={PAGE_PRODUCTS} />}
      </div>
    </div>
  );
}

export default Home;
