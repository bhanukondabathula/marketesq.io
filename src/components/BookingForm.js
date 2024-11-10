import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBookingDetails, confirmBooking } from '../redux/bookingSlice';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';
import './BookingForm.css';

const BookingForm = ({ onClose, onConfirm }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    adults: 1,
    children: 0,
    checkIn: '',
    checkOut: '',
    rooms: 1,
  });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setBookingDetails(form));
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', form);
      dispatch(confirmBooking());
      onConfirm(form);
    } catch (error) {
      setError('Booking failed. Please try again.');
      console.error('Booking failed:', error);
    }
  };

  return (
    <div className="booking-form-modal">
      <div className="booking-form-content">
        <button onClick={onClose} className="close-button">X</button>
        <Header />
        <form onSubmit={handleSubmit} className="form-container">
          <div className='form-input'>
            <div className="form-row">
              <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
              <input type="number" name="adults" value={form.adults} onChange={handleChange} min="1" placeholder="Adults" required />
              <input type="number" name="children" value={form.children} onChange={handleChange} min="0" placeholder="Children" />
            </div>
          </div>
          <div className="confirm-sec">
            <div className="confirm-input">
              <label>CHECK-IN</label>
              <input type="date" name="checkIn" value={form.checkIn} onChange={handleChange} required />
            </div>
            <div className="confirm-input">
              <label>CHECK-OUT</label>
              <input type="date" name="checkOut" value={form.checkOut} onChange={handleChange} required />
            </div>
            <div className="confirm-input">
              <label>ROOMS</label>
              <input type="number" name="rooms" value={form.rooms} onChange={handleChange} min="1" required />
            </div>
            <button type="submit" className="confirm-button">₹ 12,430 →</button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default BookingForm;
