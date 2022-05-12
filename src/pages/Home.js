import React from "react";
import NavBar from "../components/NavBar";
import { useParams, useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();

    return(
        <div>
                <NavBar />
                <div className="card" style={{ width: "50%", margin: "50px auto", fontSize: "70px", paddingTop: "10%", paddingBottom: "10%" }}>
                    <div className="card-body">
                        <div className="card-title">Quiz App</div>
                        <button className="btn btn-dark mb-3" onClick={()=>navigate("/add")}>Let's go!</button>
                    </div>
                </div>
        </div>
    );
}
