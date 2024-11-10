import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    checkIn: '',
    checkOut: '',
    rooms: 1,
    adults: 1,
    children: 0,
    isConfirmed: false,
  },
  reducers: {
    setBookingDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
    confirmBooking: (state) => {
      state.isConfirmed = true;
    },
  },
});

export const { setBookingDetails, confirmBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
