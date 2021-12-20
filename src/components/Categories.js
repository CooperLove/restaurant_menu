import React from "react";

function Categories({ categories, filter }) {
  return (
    <div className="my-btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="my-filter-btn"
            key={index}
            onClick={() => filter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
