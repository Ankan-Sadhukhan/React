import { useState } from "react";


const Header = ()=>{

    const [isLoggedIn, setIsLoggedIn]= useState(false);
return(
    <div className="nav">
        <a href="/">
            <img className="logo" alt="logo" src="https://www.f6s.com/content-resource/profiles/2214242_original.jpg"></img>
        </a>
        <div className="nav-items">
            <h4>Home</h4>
            <h4>About us</h4>
            <h4>contact</h4>
            <h4>Cart</h4>
        </div>
        <div>
            {
                (isLoggedIn? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> :<button onClick={()=>setIsLoggedIn(true)}>LogIn</button>)
            }
            
        </div>

    </div>
)
};

export default Header;