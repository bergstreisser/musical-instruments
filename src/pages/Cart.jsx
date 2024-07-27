import React from 'react'
import "../scss/app.scss";

export const Cart = () => {
  return (
    <div>
      <div className="categories">
        <h1>Musik-Instrumente</h1>
      </div>
      <div className="title">
        <div>
          <h1>Einkaufswagen</h1>
        </div>
        <div className="cart">
          <img src="img/cart.svg" alt="cart"></img>
          <div className="betrag">2000.00 €</div>
        </div>
      </div>
    </div>
  )
}
