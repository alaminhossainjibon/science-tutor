import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service'>
            <img className='images' src={img} alt="" />
            <p>Price: ${price}</p>
            <h2>Subject: {name}</h2>
            <p>{description}</p>
            <button className='button'>Chose Subject</button>
        </div>
    );
};

export default Service;