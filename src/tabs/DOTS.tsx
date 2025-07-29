import { fetchClassifications, addScore, fetchScoreById, fetchAllScores } from "@/services/fetching";
import type { Score } from "@/types/Score";
import { useEffect, useState } from "react";

function DOTS(){
    const [classifications, setClassifications] = useState([]); 
    const [scores, setScores] = useState<Score[]>()
    const userId = "96993e60-2cb9-495c-a2b8-18f98a7fc6be"; 


    useEffect(() => {
        fetchClassifications().then(data => setClassifications(data));
        fetchAllScores(userId).then(data => setScores(data)); 
        
    }, [])

    return (
        <>
            <h1>DOTS Score</h1>
            {classifications.map(classification => (<p>{classification.classification}: {classification.description}</p>))}
           {scores?.map(score => (<p>{score.score}</p>))}
            
        </>
    )
}

export default DOTS; 