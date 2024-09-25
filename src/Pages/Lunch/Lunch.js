import React from 'react';
import lunch1 from '../../images/lunch/lunch1.png';
import lunch2 from '../../images/lunch/lunch2.png';
import lunch3 from '../../images/lunch/lunch3.png';
import lunch4 from '../../images/lunch/lunch4.png';
import lunch5 from '../../images/lunch/lunch5.png';
import lunch6 from '../../images/lunch/lunch6.png';
import LunchItem from './LunchItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Lunch = () => {
    const [user, loading, error] = useAuthState(auth);
    const lounchs = [
        {Id:7,name:'Healthy Meal Plan', img:lunch1,price:23.99},
        {Id:8,name:'Fried Chicken Bento', img:lunch2,price:9.99},
        {Id:9,name:'tarragon Rubbed Salmon', img:lunch3,price:6.99},
        {Id:10,name:'Indian Lunch', img:lunch4,price:8.99},
        {Id:11,name:'Beef Steak', img:lunch5,price:15.99},
        {Id:12,name:'Honey Soy Salmon With Pepper', img:lunch6,price:7.99}
    ]
    return (
        <div className='fast'>
            <h1>Lunch</h1>
            <div className="grid">
                {
                    lounchs.map(lunch => <LunchItem
                    key={lunch.Id}
                    item={lunch}
                    >

                    </LunchItem>)
                }
            </div>
            <button  className='chek-btn'>Checkout Your Food</button>
        </div>
    );
};

export default Lunch;