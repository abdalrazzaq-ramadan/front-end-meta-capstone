import { useEffect, useState } from "react";
import Button from "./Button";
const BookingForm = ({ times=[], dispatch }) => {
    const [reservation, setReservation] = useState({
        date: "",
        time: "",
        visitorsNumber: 2,
        occasion: "Anniversary",
    });

    function handelChange(e) {
        const { name, value } = e.target
        setReservation((prev) => ({ ...prev, [name]: value }))
    }

    function handelDateChange(e) {
        const selectedDate = e.target.value;

        setReservation((prev) => ({ ...prev, date: selectedDate }));

        dispatch({ type: "changed", date: selectedDate })
    }

    useEffect(() => {
        console.log(reservation);
    }, [reservation])


    return (
        <div id="booking-form" className="p-6 ">
            <h1 className="text-subtitle font-heading text-primary mx-auto">Book now</h1>
            <form className="grid max-w-72 gap-5 mx-auto bg-surface p-6 rounded-card">

                <label htmlFor="res-date" className="">Choose date</label>
                <input type="date"
                    name="date"
                    id="res-date"
                    required
                    value={reservation.date}
                    onChange={handelDateChange}
                    className="bg-primary p-2 rounded-button text-white" />

                <label htmlFor="res-time" className="text-lead">Choose time</label>
                <select id="res-time"
                    name="time"
                    required
                    value={reservation.time}
                    onChange={handelChange}
                    className="bg-primary p-2 rounded-button text-white">
                    {times.map((time) => (
                        <option value={time} key={time}>{time}</option>
                    ))}
                </select>

                <label htmlFor="guests" className="text-lead">Number of guests</label>
                <input type="number"
                    name="visitorsNumber"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    required
                    value={reservation.visitorsNumber}
                    onChange={handelChange}
                    className="bg-primary p-2 rounded-button text-white" />

                <label htmlFor="occasion" className="text-lead">Occasion</label>
                <select id="occasion"
                    name="occasion"
                    required
                    value={reservation.occasion}
                    onChange={handelChange}
                    className="bg-primary p-2 rounded-button text-white">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <Button>Make yor reservation</Button>
            </form>
        </div>
    )
}


export default BookingForm;