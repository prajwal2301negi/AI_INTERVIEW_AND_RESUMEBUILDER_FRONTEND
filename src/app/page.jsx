'use client'
import React from 'react';
import Link from 'next/link'


const HeroSection = () => {
  return (
    <div className="bg-white py-8 min-h-screen text-center">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center space-x-4">
        </div>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">
          10x hiring process, with AI-powered.
        </h1>
        
       
        <div className="flex items-center justify-center mt-6 space-x-4">
        <Link href='/companies'>
          <button className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
            Job Roles
          </button>
          </Link>
          
          <Link href='/interview'>
          <button className="px-6 py-2 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-100">
            Practise Interview
          </button>
          </Link>
         
        </div>
        <div className="flex items-center justify-center mt-8 space-x-8">
          <img
            src="/pic1.jpeg"
            alt="Coinbase"
            className="w-16 h-auto"
          />
          <img
            src="/pic4.jpeg"
            alt="Caster"
            className="w-16 h-auto"
          />
          <img
            src="/pic3.jpeg"
            alt="Barclay"
            className="w-16 h-auto"
          />
          <img
            src="/pic2.jpeg"
            alt="Wilson"
            className="w-16 h-auto"
          />
          <img
            src="/pic5.jpeg"
            alt="Thermos"
            className="w-16 h-auto"
          />
        </div>
      </div>


          {/* Features Section */}
          <div className="bg-gray-200 py-12 mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
              <p className="text-gray-600">Mock Interviews: Conduct mock interviews using AI to simulate real interview scenarios.
              Interview Feedback: Provide instant feedback on interview performance, highlighting strengths and areas for improvement..</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Feature 2</h3>
              <p className="text-gray-600">AI Resume Builder: Use AI to help users generate resumes based on their input and job preferences.
              Real-time Editing: Allow users to edit and preview their resumes in real-time
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Feature 3</h3>
              <p className="text-gray-600">AI Integration: Ensure smooth integration of AI capabilities across both functionalities for a cohesive user experience.
              User Ratings: Allow users to rate the quality of mock interviews or generated resumes.
              </p>
            </div>
          </div>
        </div>
      </div>




        {/* Call-to-Action Section */}
        <div className="bg-blue-500 rounded-xl shadow-xl py-12 mt-16 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to revolutionize your hiring process?</h2>
          <p className="text-lg mb-8">Join thousands of businesses using our AI-powered hiring solutions.</p>
          <button className="bg-white text-blue-500 py-3 px-6 rounded-full hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </div>



   


       {/* Testimonials Section */}
       <div className="bg-white py-12 mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">"This service is amazing. It has changed our hiring process completely!"</p>
              <h4 className="mt-4 text-xl font-bold">- Elie</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">"I highly recommend this to any company looking to improve their hiring."</p>
              <h4 className="mt-4 text-xl font-bold">- Jane</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600">"A game-changer in the recruitment industry. Fantastic tool!"</p>
              <h4 className="mt-4 text-xl font-bold">- Shylie</h4>
            </div>
          </div>
        </div>
      </div>



       {/* How It Works Section */}
       <div id="how-it-works" className="bg-white py-12 mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Step 1</h3>
              <p className="text-gray-600">Mobile Compatibility: Make the website mobile-friendly for users to access features on the go.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Step 2</h3>
              <p className="text-gray-600">Recommendations: Offer personalized recommendations based on user feedback and performance data.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Step 3</h3>
              <p className="text-gray-600">Security and Privacy: Implement robust security measures, especially when handling sensitive user data like resumes.</p>
            </div>
          </div>
        </div>
      </div>


     



    </div>



    
  );
};

export default HeroSection;
