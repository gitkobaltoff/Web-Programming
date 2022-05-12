import React from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "./Quiz";
function PrintQuizes(props){
    let entries = Object.entries(props);
    console.table(entries);

    let navigate = useNavigate();
    
    function responds(id) {
        console.log(id)
        let idx = id + '';
        let path = '/quizes/'+ idx
        navigate(path);
        <Quiz id={id}/>
    }
    return(
        <div className="quizesContainer">
            {entries.map(quiz => 
            <div className="quizContainer"  key={quiz[1].id} 
                                            onClick = {() =>
                                         
                                                responds(quiz[1].id)
                                            }
                                            >
                <h1 className="quizName">Quiz: {quiz[1].title}</h1>
                <p>Questions: {quiz[1].questions_count}</p>
            
            </div>)}
        </div>
    );
}
export default PrintQuizes;
