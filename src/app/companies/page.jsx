'use client'
import React from 'react';
import Link from 'next/link';
import { Button } from "../../components/ui/button"
import { useRouter } from 'next/navigation'


const companies = [
  {
    id: "1",
    companyName: "Tech-Innovators",
    jobDescription: "Software Developer Internship",
    startDate: "2024-08-01",
    techStackRequired: ["JavaScript", "React", "Node.js"],
    companyCulture: "Innovative, Collaborative, Fast-Paced",
    numberOfEmployees: 500,
    ctcOffering: "INR 6 LPA",
    companyLogo: "/techInnovatros.png"
  },
  {
    id: "2",
    companyName: "Future-Solutions",
    jobDescription: "Data Analyst",
    startDate: "2024-09-01",
    techStackRequired: ["Python", "SQL", "Tableau"],
    companyCulture: "Analytical, Results-Driven, Supportive",
    numberOfEmployees: 200,
    ctcOffering: "INR 8 LPA",
    companyLogo: "/futureSolution.png"
  },
  {
    "id": "3",
    "companyName": "NextGen-Tech",
    "jobDescription": "Frontend Developer",
    "startDate": "2024-08-15",
    "techStackRequired": ["HTML", "CSS", "JavaScript", "Vue.js"],
    "companyCulture": "Creative, Flexible, Agile",
    "numberOfEmployees": 150,
    "ctcOffering": "INR 7 LPA",
    "companyLogo": "/nextGen.png"
  },
  {
    "id": "4",
    "companyName": "AI-Pioneers",
    "jobDescription": "Machine Learning Engineer",
    "startDate": "2024-10-01",
    "techStackRequired": ["Python", "TensorFlow", "Keras"],
    "companyCulture": "Research-Oriented, Innovative, Diverse",
    "numberOfEmployees": 300,
    "ctcOffering": "INR 12 LPA",
    "companyLogo": "/AIPio.png"
  },
  {
    "id": "5",
    "companyName": "Web-Wizards",
    "jobDescription": "Full Stack Developer",
    "startDate": "2024-08-20",
    "techStackRequired": ["JavaScript", "Node.js", "Angular", "MongoDB"],
    "companyCulture": "Dynamic, Team-Oriented, Growth-Focused",
    "numberOfEmployees": 250,
    "ctcOffering": "INR 9 LPA",
    "companyLogo": "/webwizards.png"
  },
  {
    "id": "6",
    "companyName": "Cyber-Security",
    "jobDescription": "Security Analyst",
    "startDate": "2024-09-10",
    "techStackRequired": ["Python", "Linux", "Networking"],
    "companyCulture": "Security-Focused, Detailed, Proactive",
    "numberOfEmployees": 100,
    "ctcOffering": "INR 10 LPA",
    "companyLogo": "/cyber.png"
  },
  {
    "id": "7",
    "companyName": "Cloud-Solutions",
    "jobDescription": "Cloud Engineer",
    "startDate": "2024-08-25",
    "techStackRequired": ["AWS", "Azure", "Docker", "Kubernetes"],
    "companyCulture": "Cloud-Focused, Collaborative, Innovative",
    "numberOfEmployees": 400,
    "ctcOffering": "INR 11 LPA",
    "companyLogo": "/cloud.png"
  },
  {
    "id": "8",
    "companyName": "FinTech-Innovators",
    "jobDescription": "Backend Developer",
    "startDate": "2024-09-05",
    "techStackRequired": ["Java", "Spring Boot", "MySQL"],
    "companyCulture": "Finance-Focused, Fast-Paced, Innovative",
    "numberOfEmployees": 350,
    "ctcOffering": "INR 9 LPA",
    "companyLogo": "/fintech.png"
  },
  {
    "id": "9",
    "companyName": "Eco-Tech",
    "jobDescription": "Sustainability Analyst",
    "startDate": "2024-10-15",
    "techStackRequired": ["Excel", "PowerBI", "R"],
    "companyCulture": "Eco-Friendly, Community-Oriented, Research-Driven",
    "numberOfEmployees": 80,
    "ctcOffering": "INR 8 LPA",
    "companyLogo": "/ecoTech.png"
  },
  {
    "id": "10",
    "companyName": "HealthTech-Solutions",
    "jobDescription": "Healthcare Data Scientist",
    "startDate": "2024-08-30",
    "techStackRequired": ["Python", "R", "SQL", "Healthcare Data Standards"],
    "companyCulture": "Healthcare-Focused, Innovative, Impactful",
    "numberOfEmployees": 150,
    "ctcOffering": "INR 10 LPA",
    "companyLogo": "/health.png"
  }
];

const Companies = () => {

  const router = useRouter();

  // const onSubmit = (()=>{
  //   router.push(`/feedback/${companies}`)
  // })


  return (
    <div className=" px-12 py-6 bg-gray-100 ">
      <h1 className="text-5xl font-bold mt-4 mb-12 ">Job and Internship Offerings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-4 p-1 shadow-xl rounded-lg">
        {companies.map((company, index) => (
          <div key={company.id} className="bg-white shadow-md rounded-lg pb-2 overflow-hidden">

            <img src={company.companyLogo} alt={company.companyName} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{company.companyName}</h2>
              <p className="text-gray-700 mt-2">{company.jobDescription}</p>
              <p className="text-gray-600 mt-1"><strong>Start Date:</strong> {company.startDate}</p>
              <p className="text-gray-600 mt-1"><strong>Tech Stack:</strong> {company.techStackRequired.join(', ')}</p>
              <p className="text-gray-600 mt-1"><strong>Culture:</strong> {company.companyCulture}</p>
              <p className="text-gray-600 mt-1"><strong>Employees:</strong> {company.numberOfEmployees}</p>
              <p className="text-gray-600 mt-1 mb-2"><strong>CTC:</strong> {company.ctcOffering}</p><div>
                <div className='flex gap-2'>
                {/* <Link href={`/feedback/${company.id}`} >
                  <Button>Apply Now</Button>
                </Link> */}
                  <Link href={`/resume`} >
                  <Button>Build Resume</Button>
                </Link>
                <Link href={`/interview/${company.id}`} >
                  <Button>Practise Interview</Button>
                </Link>
                </div>
                
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
