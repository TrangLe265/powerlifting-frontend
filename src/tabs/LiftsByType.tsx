import { useParams } from "react-router"

export default function LiftsByType(){
    const {liftName} = useParams<{liftName: string}>(); 
    return (
        <>
            <p>{liftName?.toLocaleUpperCase()} RECORDS</p>
        </>
    )
}