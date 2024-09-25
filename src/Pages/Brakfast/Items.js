import React, { useState } from 'react';
import './Breakfast.css';
import { useNavigate } from 'react-router-dom';
import Order from '../Order/Order';

const Items = ({item}) => {
    const {name,img,price} =item ;
    const navigate = useNavigate();
    const card = ()=>{
        // navigate('/login');
    }
    return (
        <div onClick={card} className='card'>
            <img src={img} alt="" />
           <h4>{name}</h4>
            <p>${price}</p>
            <div>
            </div>
        </div>
    );
};

export default Items;