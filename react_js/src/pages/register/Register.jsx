import { useRef } from "react"
import "./register.css"

function Register() {
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const handleClick = (e)=>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Password don't match!");
        }
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
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" ref={username} className="loginInput" required/>
                        <input placeholder="Email" type="email" ref={email} className="loginInput" required/>
                        <input placeholder="Password" type="password" minLength="6" ref={password} className="loginInput" required/>
                        <input placeholder="Password Again" type="password" ref={passwordAgain} className="loginInput" required/>
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton">
                            Log into Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register