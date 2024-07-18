'use client'
import React, { useEffect, useState, useRef } from 'react'
import Webcam from "react-webcam";
import { Button } from '../../../components/ui/button';
// import useSpeechToText from 'react-hook-speech-to-text';
import axios from 'axios'
import Link from "next/link";
import { chatSession } from "../../../components/GeminiAIModal";
import { useParams } from 'next/navigation';
import { FaLightbulb, FaVideo, FaVideoSlash } from 'react-icons/fa';


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
    companyLogo: "https://example.com/logos/tech_innovators_inc.png"
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
    companyLogo: "https://example.com/logos/future_solutions_ltd.png"
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
    "logo": "/nextGen.png"
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
    "logo": "/AIPio.png"
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
    "logo": "/webwizards.png"
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
    "logo": "/cyber.png"
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
    "logo": "/cloud.png"
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
    "logo": "/fintech.png"
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
    "logo": "/ecoTech.png"
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
    "logo": "/health.png"
  }
];

const page = () => {

  const [webCamEnable, setWebCamEnable] = useState(false);
  const [question, setQuestion] = useState('');
  const [stack, setStack] = useState(null);
  const { id } = useParams();
  const [record, setRecord] = useState(true);
  const [answer, setAnswer] = useState('');
  const [feedbackAns, setFeedbackAns] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonType, setButtonType] = useState('submit');
  // const audioContextRef = useRef(null);


  useEffect(() => {
    function getTechStackById(id) {
      const company = companies.find(company => company.id === id);
      return company ? company.techStackRequired : null;
    }

    if (id) {
      const techStack = getTechStackById(id);
      setStack(techStack);
    }

    // const handleUserGesture = () => {
    //   if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
    //     audioContextRef.current = new (AudioContext || webkitAudioContext)();

    //     if (audioContextRef.current.state === 'suspended') {
    //       audioContextRef.current.resume().then(() => {
    //         console.log('AudioContext resumed successfully');
    //       });
    //     }

    //     document.removeEventListener('click', handleUserGesture);
    //   }
    // };

    // document.addEventListener('click', handleUserGesture);

    // return () => {
    //   document.removeEventListener('click', handleUserGesture);
    // };
  }, [id]
  );




  const onSubmit = async (e) => {
    e.preventDefault();
    if (buttonType === 'submit') {
      setLoading(true);
    }
    if (buttonType === 'Ok') {
      setQuestion('');
      setButtonType('submit');
      return;
    }

    const InputPrompt = ` This is the required techstack of company: ${stack}. Ask me 5 interview question from this. Give numbering to question and return eaxh question in each line.  `;

    try {

      const result = await chatSession.sendMessage(InputPrompt);
      setLoading(false);
      setButtonType('ok');
      setQuestion(result.response.text);
    } catch (error) {
      console.error('Error:', error);
      setQuestion('');
      setButtonType('submit');
      setQuestion('Failed to get response from API.');
    }
  }





  const onSubmitTwo = async (e) => {
    e.preventDefault();


    const InputPromptTwo = `This is the answer submitted by the user from interview: ${answer} for ${question}. Give feedback to the user `;

    try {
      const result = await chatSession.sendMessage(InputPromptTwo);
      const responseText = result.response.text || 'API response was empty.';
      setFeedbackAns(responseText);


    } catch (error) {
      console.error('Error:', error);

      setFeedbackAns('Failed to get response from API.');
    }

  };



  const answerSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:8000/api/v1/feedback/postQuestion', {
        question,
        answer,
        feedbackAns,
      }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      })
      setAnswer('');
    }
    catch (err) {
      console.log(err);
    }

  }



  const handleButtonClick = async (e) => {
    e.preventDefault();
    await onSubmit(e);
  };


  const handleButtonClickTwo = async (e) => {
    e.preventDefault();
    await onSubmitTwo(e);
  };

  const handleButtonClickEnd = async (e) => {
    e.preventDefault();
    setQuestion('');
  };

  const handleButtonClickEndTwo = async (e) => {
    e.preventDefault();
    setFeedbackAns('');
  };


  // const {
  //   error,
  //   interimResult,
  //   isRecording,
  //   results,
  //   startSpeechToText,
  //   stopSpeechToText,
  // } = useSpeechToText({
  //   continuous: true,
  //   useLegacyResults: false
  // });

  // const handleStartRecording = () => {
  //   console.log('Recording started');
  //   startSpeechToText();
  // };

  // const handleStopRecording = () => {
  //   console.log('Recording stopped');
  //   stopSpeechToText();
  // };

  return (
    <div className=''>

<div className='min-h-screen p-4 m-2'>

{webCamEnable ? (
  <div className='m-4'>
    <Webcam
      onUserMedia={() => setWebCamEnable(true)}
      onUserMediaError={() => setWebCamEnable(false)}
      mirrored={true}
      style={{
        height: 300,
        backgroundColor: 'grey',
        borderRadius: 10,
        padding: 2,
        marginBottom: 10,
        zIndex: 10,
      }}
    />
    <button
      onClick={() => setWebCamEnable(false)}
      className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-2'
    >
      <span className='flex items-center'>
        <FaVideoSlash className='mr-2' /> Disable WebCamera
      </span>
    </button>
  </div>
) : (
  <div className='text-center'>
    <button
      onClick={() => setWebCamEnable(true)}
      className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'
    >
      <span className='flex items-center'>
        <FaVideo className='mr-2' /> Enable Web Camera
      </span>
    </button>
    <div className='p-5 mt-1 border rounded-lg border-yellow-300 bg-yellow-100'>
      <h2 className='flex gap-2 items-center text-yellow-500'>
        <FaLightbulb className='text-yellow-500' />
        <strong>Information</strong>
      </h2>
      <p className='text-yellow-600'>
        Enable Video Web Cam and Microphone to start your AI Generated Mock Interview. It has 5 questions which you can answer, and at the end, you will get a report based on your answers. NOTE: We never record your video; you can disable Web Cam access at any time.
      </p>
      <p className='text-red-600 text-sm my-1 font-semibold'>
        Say "Null" to a question if you do not remember the answer, and move ahead.
      </p>
      <p className='text-lg font-bold mt-1'>Best of Luck....</p>
    </div>
  </div>
)}

{question ? (
  <div className='mt-6'>
    <button
      onClick={handleButtonClickEnd}
      className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'
    >
      End Interview
    </button>
  </div>
) : (
  <div className='mt-6'>
    <button
      onClick={handleButtonClick}
      className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
    >
      Start Interview
    </button>
  </div>
)}

{question && (
  <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-700 rounded-lg">
    <h3 className="font-semibold">Questions</h3>
    {question.split('\n').map((q, index) => (
      <p key={index}>{q}</p>
    ))}
  </div>
)}

<div className='mt-6'>
  <button
    onClick={handleButtonClickTwo}
    className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'
  >
    Get Feedback
  </button>
</div>

{feedbackAns && (
  <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-700 rounded-lg">
    <h3 className="font-semibold">Answer Feedback</h3>
    <p>{feedbackAns}</p>
    <button onClick={handleButtonClickEndTwo} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-2'>
      Got Feedback
    </button>
  </div>
)}

{record && (
  <div className='mt-6'>
    <form action="">
      <textarea
        name=""
        id=""
        placeholder='Write answers here..'
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className='border border-gray-300 rounded-lg p-2 w-full'
      />
    </form>
    {answer && (
      <button
        onClick={answerSubmit}
        className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-2'
      >
        Submit
      </button>
    )}
  </div>
)}

<div className='mt-6'>
  <Link href='/companies'>
    <div className='text-blue-500 hover:underline'>Get Back</div>
  </Link>
</div>

</div>


      




      {/* <div>
        <h1>Recording: {isRecording.toString()}</h1>
        <div className='px-6 py-4'>
          <Button onClick={isRecording ? handleStopRecording : handleStartRecording}>
            {isRecording ? 'Stop Recording' : 'Record Answer'}
          </Button>
        </div>
        <ul>
          {results.map((result) => (
            <li key={result.timestamp}>{result.transcript}</li>
          ))}
          {interimResult && <li>{interimResult}</li>}
        </ul>
      </div> */}



    </div>
  );
};

export default page;

