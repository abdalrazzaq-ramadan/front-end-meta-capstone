import { useEffect, useReducer, useState } from "react";
import HomePage from "./HomePage.jsx";
import Booking from "./sections/Booking.jsx"
import { Route , Routes, useNavigate} from "react-router-dom";
import { fetchAPI , submitAPI } from "../api.js";
import ConfirmedBooking from "./ConfirmedBooking.jsx";


export function initializedTimes () {
    const today = new Date () ;

    return fetchAPI (today);
}




export function updateTimes (state , action) {
    if (action.type == "changed") {
        return fetchAPI(new Date (action.date)) ;    
    }
    return state;
}


export default function Main () {
    const [availableTimes , dispatch] = useReducer(updateTimes , initializedTimes())
    const navigate = useNavigate()
    function submitForm (formData) {
        const success = submitAPI(formData);

        if(success) {
            navigate("/confirmed")
        }
    }

    
    useEffect (() => {
        console.log(availableTimes);
    },[availableTimes])

    return(
        <>
            <Routes>
                <Route path="/" element = {<HomePage/>}></Route>
                <Route path="/booking" element = {<Booking dispatch = {dispatch}  times = {availableTimes} submitForm = {submitForm}/>}></Route>
                <Route path="/confirmed" element = {<ConfirmedBooking/>}/>
            </Routes>
        </>
    )
}