import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import PrintQuizes from "../components/PrintQuizes";
import * as ReactBootStrap from 'react-bootstrap';
function Quizes(){
    const [quizes, setQuizes] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getAllQuizes();
    }, []);
    
   const getAllQuizes = () =>{
        axios.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes',
        {headers:{
                    "X-Access-Token": '',
                }
        })
        .then((response) => {
                const allQuizes = response.data;
                setQuizes(allQuizes);         
                setLoading(true);
 
        })
        .catch(error => console.error(`Error: ${error}`));
   }

    return(
        <div>
            <NavBar />
            
            {loading ? <PrintQuizes {...quizes} /> : <ReactBootStrap.Spinner style={{ marginTop: "100px" }} animation="border"/>}
            
        </div>
    );
}
export default Quizes;