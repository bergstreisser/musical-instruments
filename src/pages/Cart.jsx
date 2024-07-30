import React from 'react'
import Categories from "../components/Categories";
import "../scss/app.scss";

export const Cart = () => {
  return (
    <div>
      <div className="categories">
        <Categories />
      </div>
      <div className="title">
        <div>
          <h1>Einkaufswagen</h1>
        </div>

      </div>
    </div>
  )
}
