import React, { useState } from 'react';
import Header from '../components/Header';
import ServiceSection from '../components/ServiceSection';
import BookingForm from '../components/BookingForm';
import ConfirmationPage from '../pages/ConfirmationPage';
import Footer from '../components/Footer';
import Discover from '../components/Discover';
import './HomePage.css'
import BookingTopsec from '../components/BookingTopsec';
const HomePage = () => {
  const [form, setForm] = useState({
    checkIn: '',
    checkOut: '',
    rooms: 1
  });
  const [view, setView] = useState('home'); // Controls which view is displayed
  const [bookingData, setBookingData] = useState(null); // Stores booking details

  const handleBookButtonClick = () => {
    setView('booking'); // Switch to booking form view
  };

  const handleBookingConfirmed = (data) => {
    setBookingData(data); // Save the booking data
    setView('confirmation'); // Switch to confirmation page view
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  return (
    <div>
      {view === 'home' && (
        <div className='home-container'>
          <Header />
          <BookingTopsec form={form} handleChange={handleChange} handleBookButtonClick={handleBookButtonClick} />
          <Discover />
          <ServiceSection />
          <Footer />
        </div>
      )}

      {view === 'booking' && (
        <BookingForm
          onConfirm={handleBookingConfirmed}
          onClose={() => setView('home')}
        />
      )}

      {view === 'confirmation' && <ConfirmationPage bookingData={bookingData} />}
    </div>
  );
};

export default HomePage;

