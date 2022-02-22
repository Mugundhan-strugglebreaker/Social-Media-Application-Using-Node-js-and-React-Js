import { useRef } from "react";
import "./login.css"

function Login() {
    const email = useRef();
    const password = useRef();

    const submitHandler =(e)=>{
        e.preventDefault();
        console.log(email.current.value)
    }

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
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password ?</span>
                    <button className="loginRegisterButton">
                        Create a new Account
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login