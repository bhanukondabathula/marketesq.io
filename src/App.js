import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingForm from './components/BookingForm';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  const [bookingData, setBookingData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingForm setBookingData={setBookingData} />} />
        <Route path="/confirmation" element={<ConfirmationPage bookingData={bookingData} />} />
      </Routes>
    </Router>
  );
}

export default App;



