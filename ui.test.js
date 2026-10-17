import {render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./src/components/BookingForm.jsx";
import userEvent from "@testing-library/user-event";

test ("Renders the book form heading" , () => {
    render(<BookingForm/>);
    const headingElement = screen.getByText("Book now")
    expect(headingElement).toBeInTheDocument();
})

test ("form validation" , () => {
    render(<BookingForm/>)
    const visitorsInput = screen.getByRole("spinbutton");

    expect(visitorsInput).toHaveAttribute("type", "number");
    expect(visitorsInput).toHaveAttribute("min", "1");
    expect(visitorsInput).toHaveAttribute("max", "10");
    expect(visitorsInput).toHaveAttribute("step", "1");
    expect(visitorsInput).toBeRequired();

})


test("date input has the correct HTML validation attributes", () => {
    render(
        <BookingForm
            times={["17:00", "18:00"]}
            dispatch={jest.fn()}
            submitForm={jest.fn()}
        />
    );

    const dateInput = screen.getByLabelText(/date/i);

    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toBeRequired();
});



test("time input has the correct HTML validation attributes", () => {
    render(
        <BookingForm
            times={["17:00", "18:00"]}
            dispatch={jest.fn()}
            submitForm={jest.fn()}
        />
    );

    const timeInput = screen.getByLabelText(/time/i);

    expect(timeInput).toHaveAttribute("required");
    expect(timeInput).toBeRequired();
    expect(timeInput).toHaveValue("");
});



test("occasion input has the correct HTML validation attributes", () => {
    render(
        <BookingForm
            times={["17:00", "18:00"]}
            dispatch={jest.fn()}
            submitForm={jest.fn()}
        />
    );

    const occasionInput = screen.getByLabelText(/occasion/i);

    expect(occasionInput).toHaveAttribute("required");
    expect(occasionInput).toBeRequired();
});



test("submit button is disabled when the form is invalid", () => {
    render(
        <BookingForm
            times={["17:00", "18:00"]}
            dispatch={jest.fn()}
            submitForm={jest.fn()}
        />
    );

    const submitButton = screen.getByRole("button", {
        name: /Fill your reservation/i
    });

    expect(submitButton).toBeDisabled();
});



test("submit button is enabled when the form is valid", async () => {
    const user = userEvent.setup();

    render(
        <BookingForm
            times={["17:00", "18:00"]}
            dispatch={jest.fn()}
            submitForm={jest.fn()}
        />
    );

    await user.type(
        screen.getByLabelText(/date/i),
        "2026-10-20"
    );

    await user.selectOptions(
        screen.getByLabelText(/time/i),
        "17:00"
    );

    const submitButton = screen.getByRole("button", {
        name: /Make your reservation/i
    });

    expect(submitButton).toBeEnabled();
});
