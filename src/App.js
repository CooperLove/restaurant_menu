import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./Data.js";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((i) => i.category === category);
    console.log(newItems);
    setMenuItems(newItems);
  };

  return (
    <main className="menu section">
      <div className="my-title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <section className="my-menu-section">
        <Categories categories={allCategories} filter={filterCategory} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
