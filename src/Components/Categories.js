import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Categories.css';

function Categories(props) {
  return (
    <div className="categories">
      <img src={props.imgsrc} alt='' className='categories-img'></img>
      <h3>{props.heading}</h3>
    </div>
  );
}

export default Categories;
