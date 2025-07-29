import type { Lift } from "@/types/Lift";
import type { Score } from "@/types/Score";

const baseUrl = import.meta.env.VITE_BASE_URL; 
//.env file needs to be in the same level as vite.config

export async function fetchUserInfo(userId: string){
    try {
        
        const response = await fetch(`${baseUrl}user/${userId}`);

        if (!response.ok) throw new Error(`Response status: ${response.status}`)
        return await response.json(); 
    } catch(err){
        console.error(err); 
        return []; 
    }
}

export async function updateUserWeight(userId: string, weight: number){
    try {
        const response = await fetch(`${baseUrl}user/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ weight })
        });

        if (!response.ok) throw new Error(`Response status: ${response.status}`)
        return await response.json(); 
    } catch(err){
        console.error(err); 
        return []; 
    }
}
export async function fetchLiftTypes(){
    try {
        
        const response = await fetch(`${baseUrl}lift-type`);

        if (!response.ok) throw new Error(`Response status: ${response.status}`)
        return await response.json(); 
    } catch(err){
        console.error(err); 
        return []; 
    }
}

export async function fetchLiftsByType(liftTypeId: number, userId: string){
    try {
        const response = await fetch(`${baseUrl}lift/user/${userId}/${liftTypeId}`); 
    
        if (!response.ok) throw new Error(`Response status: ${response.status}`)
        return await response.json(); 

    } catch(err){
        console.error(err); 
        return []; 
    }
}

export async function fetchLiftById(liftId: number){
    try {
        const response = await fetch(`${baseUrl}lift/${liftId}`);

        if (!response.ok) throw new Error(`Response status: ${response.status}`)
        return await response.json(); 
    
    } catch (err){
        console.error(err); 
        return []; 
    }
}

export async function deleteLiftById(liftId: number){
    try {
        const response = await fetch(`${baseUrl}lift/${liftId}`, { method: "DELETE" });

        if (!response.ok) throw new Error(`Response status: ${response.status}`);
        return await response.json();
    } catch(err){
        console.error(err);
        return 'Delete failed';
    }
}

export async function addLift(lift: Omit<Lift, "id">){
    try{
        const response = await fetch(`${baseUrl}lift`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(lift)
        });
        if (!response.ok) throw new Error(`Response status: ${response.status}`);
        return await response.json();
    } catch(err){
        console.error(err); 
        return 'Fail to add new lift';
    }
}

//TODO: add PUT method for lift

export async function fetchClassifications(){
    try {
        const response = await fetch(`${baseUrl}classification`); 
        if (!response.ok) throw new Error(`Response status: ${response.status}`)
        return await response.json(); 

    } catch(err){
        console.error(err); 
        return [];
    }
}

export async function fetchAllScores(userId: string ){
    try {
        const response = await fetch(`${baseUrl}dots/user/${userId}`); 
        if (!response.ok) throw new Error(`Response status: ${response.status}`)
        return await response.json(); 

    } catch(err){
        console.error(err); 
        return [];
    }
}
export async function getClassificationByScore(score: number){
    try {
        const response = await fetch(`${baseUrl}classification/score/${score}`); 
        if (!response.ok) throw new Error(`Response status: ${response.status}`)
        return await response.json(); 

    } catch(err){
        console.error(err); 
        return [];
    }
}
export async function fetchScoreById(scoreId: number){
    try {
        const response = await fetch(`${baseUrl}dots/${scoreId}`); 

        if (!response.ok) throw new Error(`Response status: ${response.status}`);
        return await response.json(); 
    } catch (err){
        console.error(err);
        return undefined; 
    }
}

export async function addScore(score: Omit<Score, "id" | "date">){
    try {
        const response = await fetch(`${baseUrl}dots`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(score)
        }); 

        if (!response.ok) throw new Error(`Response status: ${response.status}`);
        return await response.json(); 
    } catch (err){
        console.error(err);
        return []; 
    }
}

