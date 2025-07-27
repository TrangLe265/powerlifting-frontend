import { fetchLiftsByType, addLift, deleteLiftById } from "@/services/fetching";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Lift } from "@/types/Lift";


export default function LiftsByType() {
    const [lifts, setLifts] = useState<Lift[]>([]); 
    const { liftName, liftTypeId } = useParams<{ liftName: string; liftTypeId: string}>();
    const userId = "96993e60-2cb9-495c-a2b8-18f98a7fc6be"; // hard-coded for now

    const newLift: Omit<Lift, "id"> = {
        user_id: userId,
        weight_lifted: 125,
        lift_type_id: 1,
        date: new Date(),
        notes: "Felt strong!"
        };

    
    useEffect(() => {
        const id = Number(liftTypeId); 
        if (!isNaN(id)){
            fetchLiftsByType(id, userId)
            .then(data => setLifts(data));
        }

        deleteLiftById(24); 
        
    }, [liftName, liftTypeId])

    return (
        <>
            <h1>{liftName?.toLocaleUpperCase()} RECORDS</h1>
            <h1>Graph of Progression</h1>
            <button>Add new</button>
            {lifts.length}
            {lifts.map(lift => (<p>{lift.weight_lifted}</p>))}
        </>
    );
}
