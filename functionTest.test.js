import { test, expect, describe, jest } from "@jest/globals";
import { initializedTimes , updateTimes } from "./src/components/Main";
import { fetchAPI } from "./src/api";

jest.mock("./src/api.js",() => ({
    fetchAPI : jest.fn()
}))


describe("Main function tests" , () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("initializeTimes returns available times", () => {

        const expectedTimed = ["17:00" , "18:00" , "19:00"]
        
        fetchAPI.mockReturnValue (expectedTimed);

        const result = initializedTimes();

        expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
        expect (result) .toEqual(expectedTimed);
        
    });

    test ("updateTimes function " , () => {
        const selectedDate = "2026-10-20";
        const expectedTimes = ["17:00" , "18:00" , "19:00"]

        fetchAPI.mockReturnValue(expectedTimes)

        const result = updateTimes([] , {type : "changed" , date : selectedDate})

        expect (fetchAPI).toHaveBeenCalledWith(new Date (selectedDate));
        expect (result).toEqual(expectedTimes);
         
    });
})

