import React, { useRef } from 'react';
import axios from 'axios';
import "./Register.css";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //パスワードと確認用のパスワードがあっているかどうか確認
        if(password.current.value !== passwordConfirmation.current.value ) {
            passwordConfirmation.current.setCustomValidity("パスワードが違います。")
        } else {
            try {
                // registerApiを叩く
                const user = {
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                };
                await axios.post("/auth/register", user);
                navigate('/login');
            } catch (err) {
                console.log(err);
            }
        }
    }
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Real SNS</h3>
                <span className="loginDesc">本格的なSNSを自分で</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={(e) => handleSubmit(e)} >
                    <p className="loginMsg">Sign up Here</p>
                    <input type="text" className="loginInput" placeholder="User Name" required ref={username}/>
                    <input type="email" className="loginInput" placeholder="Email" required ref={email} />
                    <input type="password" className="loginInput" placeholder="Password" minLength='8' required ref={password}/>
                    <input type="password" className="loginInput" placeholder="Check Password" minLength='8' required ref={passwordConfirmation}/>
                    <button className="loginButton" type='submit'>Sign Up</button>
                    <button className="loginRegisterButton">Log In</button>
                </form>
            </div>
        </div>
    </div>
  );
}
