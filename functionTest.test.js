import { test, expect, describe } from "@jest/globals";
import { initializedTimes , updateTimes } from "./src/components/Main";

describe("Main function tests" , () => {
    test("initializeTimes returns available times", () => {
        const times = initializedTimes();

        expect(times).toEqual(["17:00" , "18:00","19:00"]);
        expect(Array.isArray(times)).toBe(true);
    });

    test ("updateTimes function " , () => {
        const initState = initializedTimes();
        const action = {type : "changed"}
        const updateTime = updateTimes(initState,action);

        expect(updateTime).toEqual([ ...initState ,"20:00"]); 
    });
})

