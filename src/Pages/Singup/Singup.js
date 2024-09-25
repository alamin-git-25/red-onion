import React, { useRef } from 'react';
import './Singup.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo2.png';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
const Singup = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user  
      ] = useCreateUserWithEmailAndPassword(auth);
      const emailRef = useRef('');
      const nameRef = useRef('');
      const passRef = useRef('');
      const ConfirmRef = useRef('');
const handleSingup =(e)=>{
   e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const ConfirmPass = ConfirmRef.current.value;
    createUserWithEmailAndPassword(email, password)
    console.log(name,email,password,ConfirmPass)

}
const [signInWithGoogle] = useSignInWithGoogle(auth);
const googleIn =()=>{
    signInWithGoogle()
}
if(user){
    // navigate('/breakfast');
}
    return (
        <div className='fast sing'>
            <img src={logo} alt="" />
            <h1>Sing up</h1>
            <div className="wrapper">
                <form onSubmit={handleSingup}>
                    <div className="input-group">
                       <input ref={nameRef} type="text" name="name" id="" placeholder='Name' required/>
                       <input ref={emailRef} type="email" name="email" id="" placeholder='Email'/>
                       <input ref={passRef} type="password" name="password" id="" placeholder='Password'/>
                       <input ref={ConfirmRef} type="password" name="confirmPass" id="" placeholder='Comfirm Password'/>
                       <input className='btn' type="submit" value="Sing up" />
                    </div>
                </form>
                <p>Alredy Have Account ? <Link to='/login'>Login</Link></p>
            </div>
            <div className="lines">
               <p className='line'>OR</p>
            </div>
            <button onClick={googleIn} className='google'>Continue With Google</button>
        </div>
    );
};

export default Singup;