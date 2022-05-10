import React from 'react';
import ReactDOM from 'react-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../styles/Faqs.css';

function Faqs() {
  return (
    <div className="faqs">
        <h1 className='headings'>FAQS</h1>
        <div className='faqs-box'>
            <p  className='box1-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry?</p>
            <div style={{position: "absolute", top: "5px", right: "10px", color: "blue"}}><KeyboardArrowUpIcon/></div>
        </div>
        <div className='faqs-box'>
            <div>
            <p className='box2-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry?</p>
            <div style={{position: "absolute", top: "5px", right: "10px", color: "blue"}}><KeyboardArrowDownIcon/></div>
            </div>
            <div className='box2'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
        </div>
        <div className='faqs-box'>
            <p className='box1-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry?</p>
            <div style={{position: "absolute", top: "5px", right: "10px", color: "blue"}}><KeyboardArrowUpIcon/></div>
        </div>
    </div>
  );
}

export default Faqs;
