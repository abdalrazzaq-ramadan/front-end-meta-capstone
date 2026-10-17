import BookingForm from "../BookingForm"

export default function Booking ({times , dispatch , submitForm}) {
    return (
        <div className="bg-theared">

            <h1>Booking Page</h1>
            <BookingForm times = {times} dispatch = {dispatch} submitForm = {submitForm} />
        </div>
    )
}