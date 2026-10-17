import {render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./src/components/BookingForm.jsx";
import {initializedTimes} from "./src/components/Main.jsx"

test ("Renders the book form heading" , () => {
    render(<BookingForm/>);
    const headingElement = screen.getByText("Book now")
    expect(headingElement).toBeInTheDocument();
})
