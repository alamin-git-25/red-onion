import React from 'react';

const Nigth = ({item}) => {
    const {name , img , price} = item;
    return (
        <div className='card'>
            <img src={img} alt="" />
           <h4>{name}</h4>
            <p>${price}</p>
        </div>
    );
};

export default Nigth;