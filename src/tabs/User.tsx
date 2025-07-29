import { fetchUserInfo } from "@/services/fetching";
import { useEffect, useState } from "react";

function User(){

    const [user, setUser] = useState({}); 
    const userId = "96993e60-2cb9-495c-a2b8-18f98a7fc6be"; 
    useEffect(() => {
         fetchUserInfo(userId).then(data => setUser(data))
    }, [])

    return (
        <>
            <h1>Lifter Profile</h1>
            <p>{user.name}</p>
            
        </>
    )
}

export default User; 