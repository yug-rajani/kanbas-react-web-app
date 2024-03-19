import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
    assignment: {
        title: "New Assignment",
        course: "C000",
        points: 100,
        due_date: "Jan 1 2024",
        due_time: "9:00 AM",
        week_description: "Week 0: Description of the week - Starting on Jan 1st",
        description: "Description of the assignment",
        available_from: "01/01/2024",
        available_until: "01/10/2024",
    },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    },
});

export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;