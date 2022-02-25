import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile"
import Register from "./pages/register/Register"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";
import { createBrowserHistory} from "history"

function App() {
  const {user} = useContext(AuthContext);
  const history = createBrowserHistory();
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ user ? <Home/> : <Login/>}/>
        <Route exact path="/login" element={ user ? history.push("/") : <Login/>}/>
        <Route exact path="/profile/:username" element={<Profile/>}/>
        <Route exact path="/register" element={ user ? history.push("/") : <Register/>}/>
        <Route exact path="/messenger" element={ user ?   <Messenger/> :history.push("/")}/>
      </Routes>
    </Router>
  );
}

export default App;
