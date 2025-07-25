const baseUrl = import.meta.env.VITE_BASE_URL; 
//.env file needs to be in the same level as vite.config


export async function fetchLiftTypes(){
    try {
        
        const response = await fetch(`${baseUrl}lift-type`);

        if (!response.ok) throw new Error('Network failed to response')
        return await response.json(); 
    } catch(err){
        console.error(err); 
        return []; 
    }
}

export async function fetchLiftsByType(liftTypeId: number, userId: string){
    try {
        const response = await fetch(`${baseUrl}lift/user/${userId}/${liftTypeId}`); 
    
        if (!response.ok) throw new Error('Network failed to response')
        return await response.json(); 

    } catch(err){
        console.error(err); 
        return []; 
    }
}
