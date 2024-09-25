import React from 'react';
import './Order.css';

const Order = () => {
    return (
        <div className='fast awit'>
             <form>
                <h3>Edit Your Order</h3>
                    <div className="input-group">
                       <input  type="text" name="name" id="" placeholder='Your Location' required/>
                       <input  type="text" name="" id="" placeholder='road'/>
                       <input type="text" name="password" id="" placeholder='building No.'/>
                       <input  type="text" name="confirmPass" id="" placeholder='Phone No.'/>
                       <input className='btn' type="submit" value="Save & Continue" />
                    </div>
                </form>
        </div>
    );
};

export default Order;