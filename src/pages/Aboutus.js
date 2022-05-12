import React from "react";
import NavBar from "../components/NavBar";
export default function Aboutus(){
    return(
        <div>
                <NavBar />
                
                <h1 style={{paddingTop: "1rem", fontSize: "70px"}}>About Us</h1>
                <img src={process.env.PUBLIC_URL + "/11friends.jpg"} alt="11 friends" style={{ height: "75vh" }} className="img-fluid p-5"/>
        </div>
    );
}
