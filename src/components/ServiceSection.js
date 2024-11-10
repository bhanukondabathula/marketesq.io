import React from 'react';
import './ServiceSection.css';

const services = [
  { icon: "📶", name: "High Speed Internet", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
  { icon: "🍲", name: "Healthy Meals", description: "A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere." },
  { icon: "🏠", name: "Homely Stay", description: "Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts provided in your space." },
  { icon: "🚗", name: "Transportation", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
  { icon: "🚴", name: "Food Delivery", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
  { icon: "🗺️", name: "Tourism", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
  { icon: "💼", name: "Job", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
  { icon: "🚗", name: "Rental Service", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
  { icon: "🛒", name: "Online Shop", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." }
];

const ServiceSection = () => (
  <section className="service-section">
    <h2>Services</h2>
    <div className="service-grid">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-icon">{service.icon}</div>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServiceSection;
