'use client'
import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 px-2 py-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to revolutionize the hiring process with our AI-powered solutions, making it faster, more efficient, and more effective for companies of all sizes.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700">
            Founded in 2020, our company has grown from a small startup to a leading provider of AI-powered hiring solutions. Our journey began with a simple idea: to help companies find the best talent quickly and easily. Over the years, we have continued to innovate and expand our services, always staying true to our core values of excellence, integrity, and customer satisfaction.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="/pic4.jpeg" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto mb-4"/>
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="/pic1.jpeg" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto mb-4"/>
              <h3 className="text-xl font-bold mb-2">Shylie</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="/pic2.jpeg" alt="Team Member 3" className="w-24 h-24 rounded-full mx-auto mb-4"/>
              <h3 className="text-xl font-bold mb-2">Emily Johnson</h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
