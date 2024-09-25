import React from 'react';
import './Breakfast.css';
import breakfast1 from '../../images/breakfast/breakfast1.png';
import breakfast2 from '../../images/breakfast/breakfast2.png';
import breakfast3 from '../../images/breakfast/breakfast3.png';
import breakfast4 from '../../images/breakfast/breakfast4.png';
import breakfast5 from '../../images/breakfast/breakfast5.png';
import breakfast6 from '../../images/breakfast/breakfast6.png';
import Items from './Items';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const breakfasts = [
    {Id:1 ,name:'Bagel and cream cheese',img: breakfast1, price:6.99},
    {Id:2 ,name:'Breakfast sandwich',img: breakfast2, price:9.99},
    {Id:3 ,name:'Baked Chiken',img: breakfast3, price:10.99},
    {Id:4 ,name:'Eggs Benedict',img: breakfast4, price:8.99},
    {Id:5 ,name:'Toast Croissant Fried egg',img: breakfast5, price:19.99},
    {Id:6 ,name:'Full Breahfast Egg Toast Brunch',img: breakfast6, price:3.99}
]

const Breakfast = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const order = ()=>{
       if(!user){
        navigate('/login');
       }
       else{
        navigate('/order');
       }
    }
    return (
        <div className='fast'>
            <h1>Breakfast</h1>
            <div className='grid'>
                {
                    breakfasts.map(breakfast =><Items 
                    key={breakfast.Id}
                    item={breakfast}
                    ></Items>)
                }
            </div>
            <button onClick={order} className='chek-btn'>Checkout Your Food</button>
        </div>
    );
};

export default Breakfast;