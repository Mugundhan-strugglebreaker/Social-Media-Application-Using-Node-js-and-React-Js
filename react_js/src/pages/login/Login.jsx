import { useRef } from "react";
import "./login.css"
import {loginCall} from "../../apiCalls"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@mui/material"

function Login() {
    const email = useRef();
    const password = useRef();
    const {user,isFetching , error, dispatch} = useContext(AuthContext)

    const submitHandler =(e)=>{
        e.preventDefault();
        loginCall({ email:email.current.value , password : password.current.value},dispatch)
    }
    console.log(user)
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">MM - Social Network</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on MM - Social Network
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={submitHandler}>
                    <input placeholder="Email" type="email" className="loginInput" required ref={email}/>
                    <input placeholder="Password" type="password" required minLength="6" className="loginInput"  ref={password}/>
                    <button className="loginButton" type="submit" disabled={isFetching}>{ isFetching ? <CircularProgress style={{'color': 'white' }} size={20}/>: "Log In"}</button>
                    <span className="loginForgot">Forgot Password ?</span>
                    <button className="loginRegisterButton">
                        { isFetching ? <CircularProgress style={{'color': 'white' }} size={20}/>: "Create a New Account"}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login