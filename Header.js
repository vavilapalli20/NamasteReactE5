import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const [buttonName , setButtonName] = useState("Login");
    console.log("hii ");
    return(
    <div className="flex justify-between px-10 lg:bg-pink-100 shadow-lg pt-4 pb-4 sm:bg-green-400">
        <div className="logo-container">
            <img className="w-20 " src={LOGO_URL}></img>
        </div>
        <div className="flex text-center">
            <ul className="flex p-4 m-4">
                <li className=" px-4"><Link to="/">Home</Link></li>
                <li className=" px-4"><Link to="/about">About Us</Link></li>
                <li className=" px-4"><Link to="/contact">Contact Us</Link></li>
                <li className=" px-4">Cart</li>
                <button className="button" onClick={()=>{
                    buttonName==="Login" ? setButtonName("Logout") : setButtonName("Login");
                }
                }> {buttonName}</button>
            </ul>
        </div>
    </div>
    );
};

export default Header;