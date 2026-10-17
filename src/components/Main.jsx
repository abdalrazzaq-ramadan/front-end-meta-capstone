import { useEffect, useReducer } from "react";
import HomePage from "./HomePage.jsx";
import Booking from "./sections/Booking.jsx"
import { Route , Routes} from "react-router-dom";

export function initializedTimes () {
    const init = ["17:00","18:00","19:00"]
    return init;
}



export function updateTimes (state , action) {
    if (action.type == "changed") {
        return [...state , "20:00"]
    }
}



export default function Main () {
    const [availableTimes , dispatch] = useReducer(updateTimes , initializedTimes())


    useEffect (() => {
        console.log(availableTimes);
    },[availableTimes])

    return(
        <>
            <Routes>
                <Route path="/" element = {<HomePage/>}></Route>
                <Route path="/booking" element = {<Booking dispatch = {dispatch}  times = {availableTimes}/>}></Route>
            </Routes>
        </>
    )
}