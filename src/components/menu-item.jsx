import "./menu-item.css";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkurl }) => {
  const navigate = useNavigate();
  const location = useLocation(); // gives current path if you need to append

  const handleClick = () => {
    // navigate to the nested route
    navigate(`${location.pathname}${linkurl}`);
  };

  return (
    <div className={`${size} menu-item`} onClick={handleClick}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
