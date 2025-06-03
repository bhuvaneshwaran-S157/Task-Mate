import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './habitSlice';

const localState = () => {
    try {
        const serializedState = localStorage.getItem('habitReducer')
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Failed to load state from localStorage", e);
        return undefined;
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('habitReducer', serializedState);
    } catch (e) {
        console.warn('Failed to save state to localStorage:', e)
    }
}

const persistedState = localState();

const store = configureStore({
    reducer: {
        habits: habitReducer,
    },
    preloadedState: persistedState,  // <-- corrected here
})

store.subscribe(() => {
    saveState(store.getState())  // <-- pass the current state here
})

export default store;
