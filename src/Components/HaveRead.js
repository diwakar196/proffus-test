import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/HaveRead.css';

function HaveRead(props) {
  return (
    <div className='haveread-box'>
        <h2>{props.heading}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <p className='have-read-more'>READ MORE {'>'}</p>
    </div>
  );
}

export default HaveRead;
