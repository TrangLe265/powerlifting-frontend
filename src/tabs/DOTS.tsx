import { fetchClassifications } from "@/services/fetching";
import { useEffect, useState } from "react";

function DOTS(){
    const [classifications, setClassifications] = useState([]); 

    useEffect(() => {
        fetchClassifications().then(data => setClassifications(data)); 
        console.log(classifications); 
    }, [])

    return (
        <>
            <h1>DOTS Score</h1>
            
        </>
    )
}

export default DOTS; 