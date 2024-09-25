import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo2.png';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      
    const handleSubmit=(event)=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email,password);

        signInWithEmailAndPassword(email,password);
    }
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
const googleIn =()=>{
    signInWithGoogle()
}
if(user){
    
}
if(user1){
   
}
    return (
        <div className='fast sing'>
            <img src={logo} alt="" />
        <h1>Login</h1>
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                   <input ref={emailRef} type="email"   placeholder='Email'/>
                   <input ref={passRef} type="password"  placeholder='Password'/>
                   <input className='btn' type="submit" value="Login" />
                </div>
            </form>
            <p>Alredy Have Account ? <Link to='/singup'>Sing up</Link></p>
        </div>
        <div className="lines">
           <p className='line'>OR</p>
        </div>
        <button onClick={googleIn} className='google'>Continue With Google</button>
    </div>
    );
};

export default Login;