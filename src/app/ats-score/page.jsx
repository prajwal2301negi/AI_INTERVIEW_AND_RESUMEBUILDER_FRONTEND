// 'use client'
// import React, { useState, useEffect } from 'react'
// import { chatSession } from '../../components/GeminiAIModal'
// import Link from 'next/link'
// import axios from 'axios'



// function AtsScore() {
//   const [resumes, setResumes] = useState([]);
//   const [feedback, setFeedback] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [buttonType, setButtonType] = useState('submit');
//   const [jobDescription, setJobDescription] = useState('')


//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/v1/resume/resumeGet', {
//           withValidators: true,
//         });
//         setResumes(response.data);
//       } catch (error) {
//         console.error('Error fetching resumes:', error);
//       }
//     };

//     fetchResumes();
//   }, []);



//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (buttonType === 'submit') {
//       setLoading(true);
//     }
//     if (buttonType === 'Ok') {
//       setFeedback('');
//       setButtonType('submit');
//       return;
//     }


//     const InputPrompt = `My Skills are:
// ${resumes.map((resume) => (
//       `\n${resume.skillsLanguages}\n${resume.skillsFrameworks}\n${resume.skillsTools}\n${resume.skillsLibraries}`
//     ))}
// Based on this, tell me whether my profile is suitable for the job according to ${jobDescription}. Give feedback in points and number them (1, 2, etc.), listing each point on a new line without applying styling to it.`;


//     try {

//       const result = await chatSession.sendMessage(InputPrompt);
//       setLoading(false);
//       console.log(InputPrompt)
//       setButtonType('ok');

//       setFeedback(result.response.text);
//     } catch (error) {
//       console.error('Error:', error);
//       setFeedback('');
//       setButtonType('submit');
//       setFeedback('Failed to get response from API.');
//     }
//   };



//   return (
//     <div>

//       <div>
//         <form action="">
//           <input type="text" placeholder='Enter Job description' value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
//         </form>
//       </div>
//       <div className="min-h-screen flex items-center justify-center">
//         <div className=" shadow-md rounded-lg p-8 max-w-lg w-full">


//           <button
//             type="button"
//             className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//             onClick={onSubmit}
//             disabled={loading}
//           >
//             {loading ? 'Loading...' : buttonType === 'submit' ? 'Submit' : 'OK'}
//           </button>

//           {feedback && (
//             <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-700">
//               <h3 className="font-semibold">Feedback</h3>
//               <p>{feedback}</p>
//             </div>
//           )}



//           <Link href='/companies'>

//             <button className='my-4 bg-blue-500 px-2 mx-2 py-2 rounded-md text-white font-semibold hover:bg-blue-600' >Back To Companies</button>
//           </Link>


//         </div>
//       </div>


//     </div>
//   )
// }

// export default AtsScore


'use client'

import React, { useState, useEffect } from 'react';
import { chatSession } from '../../components/GeminiAIModal';
import Link from 'next/link';
import axios from 'axios';

function AtsScore() {
  const [resumes, setResumes] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonType, setButtonType] = useState('submit');
  const [jobDescription, setJobDescription] = useState('');

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/resume/resumeGet');
        setResumes(response.data);
      } catch (error) {
        console.error('Error fetching resumes:', error);
      }
    };

    fetchResumes();
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

    const InputPrompt = `My Skills are:
${resumes.map((resume) => (
      `\n${resume.skillsLanguages}\n${resume.skillsFrameworks}\n${resume.skillsTools}\n${resume.skillsLibraries}`
    ))}
Based on this, tell me whether my profile is suitable for the job according to ${jobDescription}. Give feedback in points and number them (1, 2, etc.), listing each point on a new line without applying styling to it.`;

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="shadow-md rounded-lg p-8 max-w-lg w-full bg-white">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter Job description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="border rounded py-2 px-3 mb-4 w-full"
          />
        </form>

        <button
          type="button"
          onClick={onSubmit}
          className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Loading...' : buttonType === 'submit' ? 'Submit' : 'Ok'}
        </button>

        {feedback && (
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-700 rounded">
            <h3 className="font-semibold">Feedback</h3>
            <p>{feedback}</p>
          </div>
        )}

        <Link href="/companies">
          <button className="block mt-4 bg-blue-500 px-2 py-2 rounded-md text-white font-semibold hover:bg-blue-600 flex items-center justify-center">
             Back To Companies
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AtsScore;
