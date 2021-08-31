import React, { useState } from "react";
import "./Home.css";
import { FaCartArrowDown } from "react-icons/fa";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function Home() {
  const scroll = () => {
    window.scrollTo({ top: 1500, behavior: "smooth" });
    console.log("Scrolled successfully");
  };

  const [cart, setCart] = useState([]);

  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [items] = useState([
    {
      id: "1",
      title: "Chicken 65",
      price: "250 ₹ ",
      image:
        "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2019/03/Chicken-Korma-SQ.jpg",
    },
    {
      id: "2",
      title: "Malai Korma",
      price: "300 ₹ ",
      image:
        "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2019/03/Chicken-Korma-SQ.jpg",
    },
    {
      id: "3",
      title: "Mutton Biryani",
      price: "150 ₹ ",
      image:
        "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2019/03/Chicken-Korma-SQ.jpg",
    },
    {
      id: "4",
      title: "Mutton Biryani",
      price: "150 ₹ ",
      image:
        "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2019/03/Chicken-Korma-SQ.jpg",
    },
  ]);

  const addToCart = (meals) => {
    console.log("Added in Cart");
    setCart([...cart, { ...meals }]);
  };

  const removeFromCart = (productToRemove) => {
      console.log("Removed from Cart")
      setCart(
          cart.filter((meals)=> meals !== productToRemove)
      )
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  // const navigateBack = (backPage)=>{
  //     setPage(backPage)
  // }

  const renderProducts = () => (
    <>
      <div className="order-parent">
        <div className="orders">
          <h1>PRODUCT PAGE</h1>

          {/* <div className="yourCart">
            <button
              className="cartbtn"
              onClick={() => {
                console.log("clicked btn");
                setisOpen(true);
              }}
            >
              <div className="carticon">
                <FaCartArrowDown />
              </div>
              <div className="text">Your Cart </div>
            </button>
          </div> */}
          <div className="meals">
            {items.map((meals) => (
              <>
                <div className="meal-item" key={meals.id}>
                  <img src={meals.image} alt="logo"></img>
                  <h4>{meals.title} </h4>
                  <h6>{meals.price}</h6>
                  <div className="btn-10">
                    <button className="btn-9" onClick={() => addToCart(meals)}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <div className="order-parent">
        <div className="orders">
          <h1>CART PAGE</h1>

          {/* <div className="yourCart">
            <button
              className="cartbtn"
              onClick={() => {
                console.log("clicked btn");
                setisOpen(true);
              }}
            >
              <div className="carticon">
                <FaCartArrowDown />
              </div>
              <div className="text">Your Cart </div>
            </button>
          </div> */}
          <button onClick={() => navigateTo(PAGE_PRODUCTS)}>BACK</button>
          <div className="meals">
            {cart.map((meals) => (
              <>
                <div className="meal-item" key={meals.id}>
                  <img src={meals.image} alt="logo"></img>
                  <h4>{meals.title} </h4>
                  <h6>{meals.price}</h6>
                  <div className="btn-10">
                    <button
                      className="btn-8"
                      onClick={() => removeFromCart(meals)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );

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
        {page === PAGE_PRODUCTS && renderProducts()}
        {page === PAGE_CART && renderCart()}
      </div>
    </div>
  );
}

export default Home;
