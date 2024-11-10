import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ConfirmationPage.css';

function ConfirmationPage({ bookingData }) {
  // Add optional chaining or a default empty object to handle undefined bookingData
  const checkIn = bookingData?.checkIn || "Not specified";
  const email=bookingData?.email||'NA';
  const checkOut = bookingData?.checkOut || "Not specified";
  const rooms = bookingData?.rooms || 1;
  const guestName = bookingData?.name || "Guest";
  const adultCount=bookingData?.adult||'adult';
  const children=bookingData?.children||'children';
  const phone=bookingData?.phone||'number';
 

  return (
        <div className="booking-form-modal">
          <div className="booking-form-content">
            <Header />
            <div className="conf-container">
              <div className='top-cont'>
                <div className="person-details">
                  <h1>{guestName}</h1>
                  <p>{phone}</p>
                  <p>{email}</p>
                  <p>{adultCount} Adults and {children} Children</p>
                </div>

                <div className="confirmation-details">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.9eSCPL9UKEUmPTRvKWWdhAHaHa&pid=Api&P=0&h=180" alt="success" className='success'/>
                    <div >
                      <h1>Order Complete</h1>
                      <p>have questions?</p>
                      <a href='/'>contact us</a>
                    </div>
                </div>
              </div>

              <div className="conf-section">
                <div className="booking-date">
                  <h1>CHECK-IN</h1>
                  <p>{checkIn}</p>
                </div>
                <div className="booking-date">
                  <h1>CHECK-OUT</h1>
                  <p>{checkOut}</p>
                </div>
                <div className="booking-date">
                  <h1>ROOMS</h1>
                  <p>{rooms}</p>
                </div>
                <button className='price'>12,430</button>
              </div>
            </div>
            <Footer />
          </div>
        </div>
  
      );
    };

 

export default ConfirmationPage;
