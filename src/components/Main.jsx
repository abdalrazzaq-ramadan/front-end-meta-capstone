import HomePage from "./HomePage.jsx";
import Booking from "./sections/Booking.jsx"
import { Route , Routes} from "react-router-dom";

export default function Main () {
    return(
        <>
            <Routes>
                <Route path="/" element = {<HomePage/>}></Route>
                <Route path="/booking" element = {<Booking/>}></Route>
            </Routes>
        </>
    )
}