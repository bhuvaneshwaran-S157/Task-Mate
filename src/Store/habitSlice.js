import { createSlice } from "@reduxjs/toolkit";

const getEmptyWeek = () => ({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false
});


const habitSlice = createSlice({
    name: 'habits',
    initialState: [],
    reducers: {
        addHabit: (state, action) => {
            const { title, category } = action.payload;
            state.push({
                id: Date.now(),
                title,
                category,
                week: getEmptyWeek(),
            });
        },

        toggleDay: (state, action) => {
            const { habitId, day } = action.payload;
            const habit = state.find((h) => h.id === habitId);
            if (habit) {
                habit.week[day] = !habit.week[day];
            }
        },
        removeHabit: (state, action) => {
            return state.filter((habit) => habit.id !== action.payload);
        }
    },

})
export const { addHabit, toggleDay, removeHabit } = habitSlice.actions;
export default habitSlice.reducer;