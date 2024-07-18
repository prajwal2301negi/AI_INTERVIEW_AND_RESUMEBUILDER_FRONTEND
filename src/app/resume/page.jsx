'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from "next/link";


function ResumeForm() {
    const [resumes, setResumes] = useState([]);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');

    const [institution, setInstitution] = useState('');
    const [location, setLocation] = useState('');
    const [degree, setDegree] = useState('');
    const [dates, setDates] = useState('');


    const [projectName, setProjectName] = useState('');
    const [projectTechnologies, setProjectTechnologies] = useState('');
    const [projectDate, setProjectDate] = useState('');
    const [projectDetails, setProjectDetails] = useState('');

    const [experienceTitle, setExperienceTitle] = useState('');
    const [experienceCompany, setExperienceCompany] = useState('');
    const [experienceDate, setExperienceDate] = useState('');
    const [experienceDetails, setExperienceDetails] = useState('');



    const [skillsLanguages, setSkillsLanguages] = useState('');
    const [skillsFrameworks, setSkillsFrameworks] = useState('');
    const [skillsTools, setSkillsTools] = useState('');
    const [skillsLibraries, setSkillsLibraries] = useState('');

    const [achievementsTitle, setAchievementsTitle] = useState('');
    const [achievementsPositionOfResponsibility, setAchievementsPositionOfResponsibility] = useState('');
    const [achievementsSportsHonour, setAchievementsSportsHonour] = useState('');
    const [achievementsHackathon, setAchievementsHackathon] = useState('');
    const [achievementsLeetcode, setAchievementsLeetcode] = useState('');
    const [achievementsGfg, setAchievementsGfg] = useState('');


    useEffect(() => {
        const fetchResumes = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/resume/resumeGet', {
                    withValidators: true,
                });
                setResumes(response.data);
            } catch (error) {
                console.error('Error fetching resumes:', error);
            }
        };

        fetchResumes();
    }, []);


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const { data } = await axios.post('http://localhost:8000/api/v1/resume/resumeUpload', { name, phone, email, linkedin, github, institution, location, degree, dates, projectName, projectTechnologies, projectDate, projectDetails, experienceTitle, experienceCompany, experienceDate, experienceDetails, skillsLanguages, skillsFrameworks, skillsTools, skillsLibraries, achievementsTitle, achievementsPositionOfResponsibility, achievementsSportsHonour, achievementsHackathon, achievementsLeetcode, achievementsGfg }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log(data);
            alert("Resume Uploaded Successfully");
            
        }
        catch (error) {
            console.log(error);
        }

    };

    // const handleDownload = () => {
    //     const doc = new jsPDF();
    //     doc.text('Resume', 10, 10);
    //     doc.text(`Name: ${name}`, 10, 20);
    //     doc.text(`Phone: ${phone}`, 10, 30);
    //     doc.text(`Email: ${email}`, 10, 40);
    //     doc.text(`LinkedIn: ${linkedin}`, 10, 50);
    //     doc.text(`GitHub: ${github}`, 10, 60);
    //     doc.text(`Institution: ${institution}`, 10, 70);
    //     doc.text(`Location: ${location}`, 10, 80);
    //     doc.text(`Degree: ${degree}`, 10, 90);
    //     doc.text(`Dates: ${dates}`, 10, 100);
    //     doc.text(`Project Name: ${projectName}`, 10, 110);
    //     doc.text(`Project Technologies: ${projectTechnologies}`, 10, 120);
    //     doc.text(`Project Date: ${projectDate}`, 10, 130);
    //     doc.text(`Project Details: ${projectDetails}`, 10, 140);
    //     doc.text(`Experience Title: ${experienceTitle}`, 10, 150);
    //     doc.text(`Experience Company: ${experienceCompany}`, 10, 160);
    //     doc.text(`Experience Date: ${experienceDate}`, 10, 170);
    //     doc.text(`Experience Details: ${experienceDetails}`, 10, 180);
    //     doc.text(`Skills Languages: ${skillsLanguages}`, 10, 190);
    //     doc.text(`Skills Frameworks: ${skillsFrameworks}`, 10, 200);
    //     doc.text(`Skills Tools: ${skillsTools}`, 10, 210);
    //     doc.text(`Skills Libraries: ${skillsLibraries}`, 10, 220);
    //     doc.text(`Achievements Title: ${achievementsTitle}`, 10, 230);
    //     doc.text(`Achievements Position Of Responsibility: ${achievementsPositionOfResponsibility}`, 10
    //         , 240);
    //     doc.text(`Achievements Sports Honour: ${achievementsSportsHonour}`, 10,
    //         250);
    //     doc.text(`Achievements Hackathon: ${achievementsHackathon}`, 10, 260
    //     );
    //     doc.text(`Achievements Leetcode: ${achievementsLeetcode}`, 10, 270
    //     );
    //     doc.text(`Achievements Gfg: ${achievementsGfg}`, 10, 280
    //     );


    //     doc.save('resume.pdf');
    // };

    const handleDownload = () => {
        const doc = new jsPDF();

        // Set initial font size and line height
        const titleFontSize = 14;
        const sectionTitleFontSize = 12;
        const contentFontSize = 8;
        const lineHeight = 1.1;
        const margin = 10;
        const pageWidth = doc.internal.pageSize.width - 2 * margin;
        let yPos = 10;

        // Function to add section title
        const addSectionTitle = (title) => {
            doc.setFontSize(sectionTitleFontSize);
            doc.setFont('helvetica', 'bold');
            doc.text(title, 10, yPos);
            yPos += sectionTitleFontSize * lineHeight * 0.89;
        };

        // Function to add content text
        const addContentText = (text) => {
            doc.setFontSize(contentFontSize);
            doc.setFont('helvetica', 'normal');
            const splitText = doc.splitTextToSize(text, pageWidth);
            splitText.forEach(line => {
                doc.text(line, margin, yPos);
                yPos += contentFontSize * lineHeight * 0.8;
            });
            // doc.text(text, 10, yPos);
            // yPos += contentFontSize * lineHeight;
        };

        // Set the font size and style for the title
        doc.setFontSize(titleFontSize);
        doc.setFont('helvetica', 'bold');
        doc.text('Resume', 105, yPos, null, null, 'center');
        yPos += titleFontSize * lineHeight;

        // Add contact information
        // const { name, phone, email, linkedin, github } = personalInfo;
        addSectionTitle(`${name} | ${phone} | ${email}`);
        addContentText(` ${linkedin} | ${github}`);

        // Add Education section
        addSectionTitle('Education');
        // education.forEach(edu => {
        addContentText(`Institution: ${institution}, Location: ${location}`);
        addContentText(`Degree: ${degree}, Dates: ${dates}`);
        // });

        // Add Projects section
        addSectionTitle('Projects');
        // projects.forEach(project => {
        addContentText(`Project Name: ${projectName}, Technologies: ${projectTechnologies}`);
        addContentText(`Date: ${projectDate}`);
        addContentText(`Date: ${projectDetails}`);

        // project.details.forEach(detail => addContentText(detail));
        // });

        // Add Experience section
        addSectionTitle('Experience');
        // experience.forEach(exp => {
        addContentText(`Title: ${experienceTitle}, Company: ${experienceCompany}`);
        addContentText(`Date: ${experienceDate}`);
        addContentText(`Description: ${experienceDetails}`);
        //     exp.details.forEach(detail => addContentText(detail));
        // });

        // Add Skills section
        addSectionTitle('Skills');
        addContentText(`Languages: ${skillsLanguages}`);
        addContentText(`Frameworks: ${skillsFrameworks}`);
        addContentText(`Tools: ${skillsTools}`);
        addContentText(`Libraries: ${skillsLibraries}`);

        // Add Achievements section
        addSectionTitle('Achievements');
        // achievements.forEach(ach => {
        addContentText(`Title: ${achievementsTitle}`);
        addContentText(`Leetcode: ${achievementsLeetcode}`);
        addContentText(`Gfg: ${achievementsGfg}`);
        addContentText(`Hackathon: ${achievementsHackathon}`);
        addContentText(`POR: ${achievementsPositionOfResponsibility}`);
        addContentText(`Sports: ${achievementsSportsHonour}`);
        // });

        doc.save('resume.pdf');
    };


    return (
        <div>


<motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <div className="flex items-center mb-2">
        <FaLinkedin className="mr-2 text-blue-700" />
        <input
          type="text"
          name="linkedin"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          placeholder="LinkedIn"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex items-center mb-2">
        <FaGithub className="mr-2 text-gray-700" />
        <input
          type="text"
          name="github"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          placeholder="GitHub"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <h2 className="text-2xl font-bold mt-4 mb-2">Education</h2>
      <input
        type="text"
        name="institution"
        value={institution}
        onChange={(e) => setInstitution(e.target.value)}
        placeholder="Institution"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        placeholder="Degree"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="dates"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
        placeholder="Dates"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />

      <h2 className="text-2xl font-bold mt-4 mb-2">Projects</h2>
      <input
        type="text"
        name="name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Project Name"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="technologies"
        value={projectTechnologies}
        onChange={(e) => setProjectTechnologies(e.target.value)}
        placeholder="Technologies"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="date"
        value={projectDate}
        onChange={(e) => setProjectDate(e.target.value)}
        placeholder="Date"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        value={projectDetails}
        onChange={(e) => setProjectDetails(e.target.value)}
        placeholder="Project Details"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />

      <h2 className="text-2xl font-bold mt-4 mb-2">Experience</h2>
      <input
        type="text"
        name="title"
        value={experienceTitle}
        onChange={(e) => setExperienceTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="company"
        value={experienceCompany}
        onChange={(e) => setExperienceCompany(e.target.value)}
        placeholder="Company"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="date"
        value={experienceDate}
        onChange={(e) => setExperienceDate(e.target.value)}
        placeholder="Date"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        value={experienceDetails}
        onChange={(e) => setExperienceDetails(e.target.value)}
        placeholder="Detail"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />

      <h2 className="text-2xl font-bold mt-4 mb-2">Skills</h2>
      <input
        type="text"
        name="languages"
        value={skillsLanguages}
        onChange={(e) => setSkillsLanguages(e.target.value)}
        placeholder="Languages"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="frameworks"
        value={skillsFrameworks}
        onChange={(e) => setSkillsFrameworks(e.target.value)}
        placeholder="Frameworks"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="tools"
        value={skillsTools}
        onChange={(e) => setSkillsTools(e.target.value)}
        placeholder="Tools"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="libraries"
        value={skillsLibraries}
        onChange={(e) => setSkillsLibraries(e.target.value)}
        placeholder="Libraries"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />

      <h2 className="text-2xl font-bold mt-4 mb-2">Achievements</h2>
      <input
        type="text"
        name="title"
        value={achievementsTitle}
        onChange={(e) => setAchievementsTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="positionOfResponsibility"
        value={achievementsPositionOfResponsibility}
        onChange={(e) => setAchievementsPositionOfResponsibility(e.target.value)}
        placeholder="Holding any Position of Responsibility"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="hackathon"
        value={achievementsHackathon}
        onChange={(e) => setAchievementsHackathon(e.target.value)}
        placeholder="Hackathon took part in"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="sportsHonour"
        value={achievementsSportsHonour}
        onChange={(e) => setAchievementsSportsHonour(e.target.value)}
        placeholder="Any Medals/Certificates in Sports"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="leetcode"
        value={achievementsLeetcode}
        onChange={(e) => setAchievementsLeetcode(e.target.value)}
        placeholder="Leetcode Link"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="gfg"
        value={achievementsGfg}
        onChange={(e) => setAchievementsGfg(e.target.value)}
        placeholder="GFG Link"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </motion.form>
           

            <div className=''>
                {resumes.map((resume) => (
                    <div className='bg-white shadow-md rounded-lg p-6 mb-6'>

                        <resume key={resume._id} resume={resume} />
                        <h2 className="text-2xl font-bold mb-4">{resume.name}</h2>
                        <div className="mb-2">
                            <strong>Phone:</strong> {resume.phone}
                        </div>
                        <div className="mb-2">
                            <strong>Email:</strong> {resume.email}
                        </div>
                        <div className="mb-2">
                            <strong>LinkedIn:</strong> <a href={resume.linkedin} className="text-blue-500">{resume.linkedin}</a>
                        </div>
                        <div className="mb-2">
                            <strong>GitHub:</strong> <a href={resume.github} className="text-blue-500">{resume.github}</a>
                        </div>
                        <h3 className="text-xl font-semibold mt-4">Education</h3>
                        <div className="mb-2">
                            <strong>Institution:</strong> {resume.institution}
                        </div>
                        <div className="mb-2">
                            <strong>Location:</strong> {resume.location}
                        </div>
                        <div className="mb-2">
                            <strong>Degree:</strong> {resume.degree}
                        </div>
                        <div className="mb-2">
                            <strong>Dates:</strong> {resume.dates}
                        </div>
                        <h3 className="text-xl font-semibold mt-4">Projects</h3>
                        <div className="mb-2">
                            <strong>Project Name:</strong> {resume.projectName}
                        </div>
                        <div className="mb-2">
                            <strong>Technologies:</strong> {resume.projectTechnologies}
                        </div>
                        <div className="mb-2">
                            <strong>Date:</strong> {resume.projectDate}
                        </div>
                        <div className="mb-2">
                            <strong>Details:</strong> {resume.projectDetails}
                        </div>
                        <h3 className="text-xl font-semibold mt-4">Experience</h3>
                        <div className="mb-2">
                            <strong>Title:</strong> {resume.experienceTitle}
                        </div>
                        <div className="mb-2">
                            <strong>Company:</strong> {resume.experienceCompany}
                        </div>
                        <div className="mb-2">
                            <strong>Date:</strong> {resume.experienceDate}
                        </div>
                        <div className="mb-2">
                            <strong>Details:</strong> {resume.experienceDetails}
                        </div>
                        <h3 className="text-xl font-semibold mt-4">Skills</h3>
                        <div className="mb-2">
                            <strong>Languages:</strong> {resume.skillsLanguages}
                        </div>
                        <div className="mb-2">
                            <strong>Frameworks:</strong> {resume.skillsFrameworks}
                        </div>
                        <div className="mb-2">
                            <strong>Tools:</strong> {resume.skillsTools}
                        </div>
                        <div className="mb-2">
                            <strong>Libraries:</strong> {resume.skillsLibraries}
                        </div>
                        <h3 className="text-xl font-semibold mt-4">Achievements</h3>
                        <div className="mb-2">
                            <strong>Title:</strong> {resume.achievementsTitle}
                        </div>
                        <div className="mb-2">
                            <strong>Position of Responsibility:</strong> {resume.achievementsPositionOfResponsibility}
                        </div>
                        <div className="mb-2">
                            <strong>Sports Honour:</strong> {resume.achievementsSportsHonour}
                        </div>
                        <div className="mb-2">
                            <strong>Hackathon:</strong> {resume.achievementsHackathon}
                        </div>
                        <div className="mb-2">
                            <strong>Leetcode:</strong> <a href={resume.achievementsLeetcode} className="text-blue-500">{resume.achievementsLeetcode}</a>
                        </div>
                        <div className="mb-2">
                            <strong>Gfg:</strong> <a href={resume.achievementsGfg} className="text-blue-500">{resume.achievementsGfg}</a>
                        </div>
                    </div>

                ))}
            </div>
            <div className='flex justify-content gap-2'>
            <button type="button" className='my-4 bg-purple-500 px-2 mx-2 py-1 rounded-lg text-white font-semibold hover:bg-purple-600' onClick={handleDownload}>Download PDF</button>
            <Link href='/ats-score'>
            <button type="button" className='my-4 bg-purple-500 px-2 mx-2 py-1 rounded-lg text-white font-semibold hover:bg-purple-600'>Check ATS Score using AI</button>
            </Link>
           
            </div>
        
        </div>
    );
};



export default ResumeForm