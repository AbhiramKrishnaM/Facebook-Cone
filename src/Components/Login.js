import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from "../Firebase/Firebase";
import '../Css/Login.css';
function Login() {
    const signIn = ()=>{
        // sign in
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
        }).catch(error => alert(error.message));
    }
    return (
        <div className="login"> 
            <div className="login__logo">
                <img 
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""></img>
                <img
                src="https://katanningrotary.org/wp-content/uploads/2019/04/facebook-text-transparent-logo-23.png"
                alt=""></img>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
