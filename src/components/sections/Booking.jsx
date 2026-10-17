import BookingForm from "../BookingForm"

export default function Booking ({times , dispatch , submitForm}) {
    return (
        <div className="bg-white">
            <h1 className="text-center text-subtitle font-heading text-secondary">Booking Page</h1>
            <BookingForm times = {times} dispatch = {dispatch} submitForm = {submitForm} />
        </div>
    )
}