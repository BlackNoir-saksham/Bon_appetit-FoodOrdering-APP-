import React, { useState } from "react";

function Products({ addToCart }) {
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

  return (
    <>
      <div className="order-parent">
        <div className="orders">
          <h1>PRODUCT PAGE</h1>

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
}

export default Products;
