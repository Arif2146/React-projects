import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-filters">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
          onClick={() => onCategoryChange(category.id)}
          style={{
            backgroundColor: selectedCategory === category.id ? category.color : undefined,
            borderColor: selectedCategory === category.id ? category.color : undefined
          }}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;