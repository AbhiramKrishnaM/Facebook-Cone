import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from "../Firebase/Firebase";
import '../Css/Login.css';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';
function Login() {
    // hook usestate which allows us to pull information fromt the datalayer
    const [state, dispatch] = useStateValue();
    const signIn = ()=>{
        // sign in
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
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
