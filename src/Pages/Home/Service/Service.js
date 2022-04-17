import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='images' src={img} alt="" />
            <p>Price: ${price}</p>
            <h2>Subject: {name}</h2>
            <p>{description}</p>
            <button onClick={() => navServiceDetail(id)} className='button'>Subject Details</button>
        </div>
    );
};

export default Service;