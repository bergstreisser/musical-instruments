import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import "./scss/app.scss";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";

function App() {

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="wrapper">
        <div className="content">
          <div className="categories">
            <Categories />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
