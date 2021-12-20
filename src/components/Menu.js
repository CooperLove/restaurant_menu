import React from "react";
import "../myCss.css";

function Menu({ items }) {
  return (
    <div className="my-section-center">
      {items.map((menuItem) => {
        const { id, title, desc, price, img } = menuItem;
        return (
          <article key={id} className="my-menu-item">
            <img src={img} alt={title} className="my-photo" />
            <div className="my-item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="my-price">R$ {price}</h4>
              </header>
              <p className="my-item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
