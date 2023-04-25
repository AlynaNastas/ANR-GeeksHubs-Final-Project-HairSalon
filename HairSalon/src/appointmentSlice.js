import { createSlice } from '@reduxjs/toolkit';

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: {
        choosenAppointment: {}
    },
    reducers: {
        addChoosenAppointmen: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },

    }
}
);

export const { addChoosenAppointmen } = appointmentSlice.actions;

export const appointmentData = (state) => state.appointment;

export default appointmentSlice.reducer;
