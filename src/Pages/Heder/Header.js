import React from 'react';
import logo2 from '../../images/logo2.png';
import  {Link}  from 'react-router-dom';
import './Header.css';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const  logout =()=>{
     signOut();
    }
    return (
       <header>
        <nav className='nav-top'>
            <div className="logo">
                <img src={logo2} alt="" />
            </div>
            <ul className="links">
                <li ><Link id='bx-carts'><i className='bx bx-cart'></i></Link></li>
               {
                user ? <li><Link onClick={logout}>Log out</Link></li>
                :
                <li><Link to='/login'>Login</Link></li>
               }
                <li id='singup'><Link to='/singup'>Sing up</Link></li>
            </ul>
        </nav>
        <section>
            <h2>Best Food Waiting For You</h2>
            <div className="input">
                <input type="text" />
               <button id='search-btn'>Search</button>
            </div>
        </section>
        <div className="food-links">
            <nav className='navbar'>
                <ul>
                    <li><Link to='/breakfast'>BreakFast</Link></li>
                    <li><Link to='/lunch'>Lunch</Link></li>
                    <li><Link to='/dinner'>Dinner</Link></li>
                </ul>
            </nav>
        </div>
       </header>
    );
};

export default Header;