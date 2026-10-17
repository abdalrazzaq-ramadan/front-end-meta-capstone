import { useEffect, useState } from "react";
import Button from "./Button";


const BookingForm = ({ times=[], dispatch , submitForm }) => {
    const [reservation, setReservation] = useState({
        date: "",
        time: "",
        visitorsNumber: 2,
        occasion: "Anniversary",
    });

    const isInvalid =
    reservation.visitorsNumber !== "" &&
    (!Number.isInteger(Number(reservation.visitorsNumber)) ||
    Number(reservation.visitorsNumber) < 1 ||
    Number(reservation.visitorsNumber) > 10);



    const isFormValid =
        reservation.date !== "" &&
        reservation.time !== "" &&
        Number.isInteger(Number(reservation.visitorsNumber)) &&
        Number(reservation.visitorsNumber) >= 1 &&
        Number(reservation.visitorsNumber) <= 10 &&
        reservation.occasion !== "";



    function handelChange(e) {
        const { name, value } = e.target
        setReservation((prev) => ({ ...prev, [name]: value }))
    }

    function handelDateChange(e) {
        const selectedDate = e.target.value;

        setReservation((prev) => ({ ...prev, date: selectedDate }));

        dispatch({ type: "changed", date: selectedDate })
    }

    function handelSubmit (e) {
        e.preventDefault()

        if (!isFormValid) {
            return;
        }

        const formData = reservation ;
        
        submitForm(formData)
    }

    useEffect(() => {
        console.log(reservation);
    }, [reservation])


    return (
        <div id="booking-form" className="p-6 ">
            <h2 className="text-center text-subtitle font-heading text-primary mx-auto">Book now</h2>
            <form onSubmit={handelSubmit} className="grid max-w-3/12 gap-5 mx-auto bg-surface p-6 rounded-card shadow-2xl shadow-secondary border border-surface transition ease-linear hover:border-secondary">

                <label htmlFor="res-date" className="">Choose date</label>
                <input type="date"
                    name="date"
                    id="res-date"
                    required
                    value={reservation.date}
                    onChange={handelDateChange}
                    className="w-full rounded-md border p-2 outline-none" />

                <label htmlFor="res-time" className="text-lead">Choose time</label>
                <select id="res-time"
                    name="time"
                    required
                    value={reservation.time}
                    onChange={handelChange}
                    className="w-full rounded-md border p-2 outline-none">
                        <option value="">Select a time</option>
                    {times.map((time,index) => (
                        <option value={time} key={index}>{time}</option>
                    ))}
                </select>
                <div>
                    <label htmlFor="guests" className="text-lead">Number of guests</label>
                    <input type="number"
                        name="visitorsNumber"
                        placeholder="1"
                        min="1"
                        max="10"
                        step="1"
                        id="guests"
                        required
                        value={reservation.visitorsNumber}
                        onChange={handelChange}
                        aria-invalid={isInvalid}
                        aria-describedby={isInvalid ? "visitors-error" : undefined}
                        className={`w-full rounded-md border-2 p-2 outline-none ${
                                    isInvalid
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-2-gray-300 focus:border-primary"
                                    }`} />
                    {isInvalid && (
                        <p id="guests-error" className="mt-1 text-sm text-red-600">
                            Please enter a whole number between 1 and 10.
                        </p>
                    )}
                </div>

                <label htmlFor="occasion" className="text-lead">Occasion</label>
                <select id="occasion"
                    name="occasion"
                    required
                    value={reservation.occasion}
                    onChange={handelChange}
                    className="w-full rounded-md border p-2 outline-none">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <Button disabled={!isFormValid} type={"submit"}> {isFormValid?"Make your reservation": "Fill your reservation"}</Button>
            </form>
        </div>
    )
}


export default BookingForm;