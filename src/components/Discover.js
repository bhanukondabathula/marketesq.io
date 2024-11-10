import React from "react";
import "./Discover.css";

const testimonials = [
  {
    id: 1,
    name: "Arjun Raghav",
    text: "I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.",
    rating: 4,
    image: "https://tse3.mm.bing.net/th?id=OIP.YM4qJhOTItC4jXMG1VIpugHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "Anand Solanki",
    text: "I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.",
    rating: 5,
    image: "https://tse3.mm.bing.net/th?id=OIP.YM4qJhOTItC4jXMG1VIpugHaHa&pid=Api&P=0&h=180",
  },
];

const Discover = () => {
  return (
    <div className="discover">
      <h1>Discover</h1>
      <div className="main-container">
        <div className="testimonial-card">
            <div className="avathar-sec">
                <img src={testimonials[0].image} alt={testimonials[0].name} className="avatar" />
                <div>
                    <h3>{testimonials[0].name}</h3>
                    <div className="rating">{"⭐".repeat(testimonials[0].rating)}</div>
                </div>
            </div>
            <p>{testimonials[0].text} <span className="read-more">read more</span></p>
        </div>
        <div className="imagecard">
            <div className="bg-image">

            </div>
            <div className="testimonial-card-large">
            <div className="avathar-sec">
                <img src={testimonials[0].image} alt={testimonials[0].name} className="avatar" />
                <div>
                    <h3>{testimonials[0].name}</h3>
                    <div className="rating">{"⭐".repeat(testimonials[0].rating)}</div>
                </div>
            </div>
            <p>{testimonials[0].text} <span className="read-more">read more</span></p>
            </div>
        </div>
        <div>
            <div className="testimonial-card">
                <div className="avathar-sec">
                    <img src={testimonials[0].image} alt={testimonials[0].name} className="avatar" />
                    <div>
                        <h3>{testimonials[0].name}</h3>
                        <div className="rating">{"⭐".repeat(testimonials[0].rating)}</div>
                    </div>
                </div>
                <p>{testimonials[0].text} <span className="read-more">read more</span></p>
            </div>
            <div className="testimonial-card">
                <div className="avathar-sec">
                    <img src={testimonials[0].image} alt={testimonials[0].name} className="avatar" />
                    <div>
                        <h3>{testimonials[0].name}</h3>
                        <div className="rating">{"⭐".repeat(testimonials[0].rating)}</div>
                    </div>
                </div>
                <p>{testimonials[0].text} <span className="read-more">read more</span></p>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Discover;
