import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";
import AppContext from './context';
import data from "./data/db.json";
import "./scss/app.scss";

function App() {
  const [currentCategory, setCurrentCategory] = React.useState(0);

  const category = data.filter((item) => {
    return item.category === currentCategory;
  });

  return (
    <AppContext.Provider value={{ data, category, setCurrentCategory }}>
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
              <Route path="/musical-instruments/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
