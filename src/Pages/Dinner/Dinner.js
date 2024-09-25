import React from 'react';
import dinner1 from '../../images/dinner/dinner1.png';
import dinner2 from '../../images/dinner/dinner2.png';
import dinner3 from '../../images/dinner/dinner3.png';
import dinner4 from '../../images/dinner/dinner4.png';
import dinner5 from '../../images/dinner/dinner5.png';
import dinner6 from '../../images/dinner/dinner6.png';
import Nigth from './Nigth';

const Dinner = () => {
    const dinners =[
        {id:13, name:'Salmon with Grapefruit',img:dinner1,price:9.99},
        {id:14, name:'Lamony Salmon Piccata',img:dinner2,price:10.99},
        {id:15, name:'beef with Garlic',img:dinner3,price:12.99},
        {id:16, name:'French Fries Cheese',img:dinner4,price:8.99},
        {id:17, name:'Garlic Butter Baked Salmon',img:dinner5,price:6.99},
        {id:18, name:'Baked Chicken',img:dinner6,price:9.99},
    ]
    return (
        <div className='fast'>
            <h1>Dinner</h1>
            <div className="grid">
                {
                    dinners.map(dinner =><Nigth
                    key={dinner.id}
                    item={dinner}
                    ></Nigth>)
                }
            </div>
        </div>
    );
};

export default Dinner;