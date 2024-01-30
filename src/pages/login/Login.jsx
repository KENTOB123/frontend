import React, { useContext } from 'react';
import "./Login.css";
import { useRef } from 'react';
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginCall({
           email: email.current.value,
           password: password.current.value,
        },
        dispatch);
    };
    
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Real SNS</h3>
                <span className="loginDesc">本格的なSNSを自分で</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
                    <p className="loginMsg">Login Here</p>
                    <input type="email" className="loginInput" placeholder="Email" required ref={email}/>
                    <input type="password" className="loginInput" placeholder="Password" required minLength="8" ref={password} />
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Don't Remember Pass?</span>
                    <button className="loginRegisterButton">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  );
}
