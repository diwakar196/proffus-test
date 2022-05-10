import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Topics.css';

function Topics(props) {
  return (
    <div className="have-read">      
        <h2>{props.heading}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p className='read-more-topics'>READ MORE {'>'}</p>
    </div>
  );
}

export default Topics;
