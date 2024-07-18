
'use client'

import { chatSession } from "../../../components/GeminiAIModal";
import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';

const companies = [
  {
    "companyName": "Tech Innovators Inc.",
    "jobDescription": "Software Developer Internship",
    "startDate": "2024-08-01",
    "techStackRequired": ["JavaScript", "React", "Node.js"],
    "companyCulture": "Innovative, Collaborative, Fast-Paced",
    "numberOfEmployees": 500,
    "ctcOffering": "INR 6 LPA",
    "logo":"/techInnovators.png"
  },
  {
    "companyName": "Future Solutions Ltd.",
    "jobDescription": "Data Analyst",
    "startDate": "2024-09-01",
    "techStackRequired": ["Python", "SQL", "Tableau"],
    "companyCulture": "Analytical, Results-Driven, Supportive",
    "numberOfEmployees": 200,
    "ctcOffering": "INR 8 LPA",
     "logo":"/futreSoloution.png"
  },
  {
    "companyName": "NextGen Tech",
    "jobDescription": "Frontend Developer",
    "startDate": "2024-08-15",
    "techStackRequired": ["HTML", "CSS", "JavaScript", "Vue.js"],
    "companyCulture": "Creative, Flexible, Agile",
    "numberOfEmployees": 150,
    "ctcOffering": "INR 7 LPA",
     "logo":"/nextGen.png"
  },
  {
    "companyName": "AI Pioneers",
    "jobDescription": "Machine Learning Engineer",
    "startDate": "2024-10-01",
    "techStackRequired": ["Python", "TensorFlow", "Keras"],
    "companyCulture": "Research-Oriented, Innovative, Diverse",
    "numberOfEmployees": 300,
    "ctcOffering": "INR 12 LPA",
     "logo":"/AIPio.png"
  },
  {
    "companyName": "Web Wizards",
    "jobDescription": "Full Stack Developer",
    "startDate": "2024-08-20",
    "techStackRequired": ["JavaScript", "Node.js", "Angular", "MongoDB"],
    "companyCulture": "Dynamic, Team-Oriented, Growth-Focused",
    "numberOfEmployees": 250,
    "ctcOffering": "INR 9 LPA",
     "logo":"/webwizards.png"
  },
  {
    "companyName": "Cyber Security Pros",
    "jobDescription": "Security Analyst",
    "startDate": "2024-09-10",
    "techStackRequired": ["Python", "Linux", "Networking"],
    "companyCulture": "Security-Focused, Detailed, Proactive",
    "numberOfEmployees": 100,
    "ctcOffering": "INR 10 LPA",
     "logo":"/cyber.png"
  },
  {
    "companyName": "Cloud Solutions Inc.",
    "jobDescription": "Cloud Engineer",
    "startDate": "2024-08-25",
    "techStackRequired": ["AWS", "Azure", "Docker", "Kubernetes"],
    "companyCulture": "Cloud-Focused, Collaborative, Innovative",
    "numberOfEmployees": 400,
    "ctcOffering": "INR 11 LPA",
     "logo":"/cloud.png"
  },
  {
    "companyName": "FinTech Innovators",
    "jobDescription": "Backend Developer",
    "startDate": "2024-09-05",
    "techStackRequired": ["Java", "Spring Boot", "MySQL"],
    "companyCulture": "Finance-Focused, Fast-Paced, Innovative",
    "numberOfEmployees": 350,
    "ctcOffering": "INR 9 LPA",
     "logo":"/fintech.png"
  },
  {
    "companyName": "Eco Tech",
    "jobDescription": "Sustainability Analyst",
    "startDate": "2024-10-15",
    "techStackRequired": ["Excel", "PowerBI", "R"],
    "companyCulture": "Eco-Friendly, Community-Oriented, Research-Driven",
    "numberOfEmployees": 80,
    "ctcOffering": "INR 8 LPA",
     "logo":"/ecoTech.png"
  },
  {
    "companyName": "HealthTech Solutions",
    "jobDescription": "Healthcare Data Scientist",
    "startDate": "2024-08-30",
    "techStackRequired": ["Python", "R", "SQL", "Healthcare Data Standards"],
    "companyCulture": "Healthcare-Focused, Innovative, Impactful",
    "numberOfEmployees": 150,
    "ctcOffering": "INR 10 LPA",
     "logo":"/health.png"
  }
]

function page() {

  const [user, setUser] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonType, setButtonType] = useState('submit');
   // Get the dynamic route parameter
  const { interviewId } = useParams();
  const [stack, setStack] = useState(null);

  useEffect(() => {
    function getTechStackById(id) {
      const company = companies.find(company => company.id === id);
      return company ? company.techStackRequired : null;
    }

    if (interviewId) {
      const techStack = getTechStackById(interviewId);
      setStack(techStack);
    }
  }, [interviewId]);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/user/getUserProfile",
          {
            withCredentials: true,
          }
        );
        setUser(data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (buttonType === 'submit') {
      setLoading(true);
    }
    if (buttonType === 'Ok') {
      setFeedback('');
      setButtonType('submit');
      return;
    }
    const InputPrompt = `Job Tech Stack required: ${stack}. My techStack is:${user.techStack}. Based on this tell me whether my profile is suitable for job according to techStack and provide me feedback for making me suitable for the given job. Give Feedback in points and number them 1,2 etc and give every point in next line without applying styling to it `;

    try {

      const result = await chatSession.sendMessage(InputPrompt);
      setLoading(false);

      setButtonType('ok');

      setFeedback(result.response.text);
    } catch (error) {
      console.error('Error:', error);
      setFeedback('');
      setButtonType('submit');
      setFeedback('Failed to get response from API.');
    }
  };




  return (


    <div className="py-6 px-12 m-4">
      {user ? (
        <>
          <div className="flex justify-center ">
            <img
              src={user.avatar && user.avatar.url ? user.avatar.url : "default-image-url"}
              alt="Profile Image"
              className="h-48 w-48 object-cover shadow-xl rounded-full"
            />
          </div>
          <div className="text-center text-3xl font-bold mb-4">{user.name}</div>
          <div className="">
            <div className="mb-2">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="mb-2">
              <strong>Tech Stack:</strong> {user.techStack}
            </div>
          </div>
        </>
      ) : (
        <div className="text-center text-3xl font-bold text-white mb-4">Loading...</div>
      )}
      <div className="min-h-screen flex items-center justify-center">
        <div className=" shadow-md rounded-lg p-8 max-w-lg w-full">


          <button
            type="button"
            className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={onSubmit}
            disabled={loading}
          >
            {loading ? 'Loading...' : buttonType === 'submit' ? 'Submit' : 'OK'}
          </button>

          {feedback && (
            <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700">
              <h3 className="font-semibold">Feedback</h3>
              <p>{feedback}</p>
            </div>
          )}

          <Link href='/companies'>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600  ml-2 " >Back</button>
          </Link>


        </div>
      </div>
    </div>

    


  )
}

export default page
