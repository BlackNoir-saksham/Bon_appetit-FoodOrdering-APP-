import React, { useState } from 'react'

function Cart({cart, removeFromCart, navigateTo, PAGE_PRODUCTS}) {
    

    
    return (
        <>
      <div className="order-parent">
        <div className="orders">
          <h1>CART PAGE</h1>

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
    )
}

export default Cart
