'use client'

import axios from "axios";
import React, { useState, useEffect } from "react";
import Link from "next/link";



const Register = () => {



  const [techStack, setTechStack] = useState('');
  const [college, setCollege] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('');
  const [resume, setResume] = useState('');
  const [resumePreview, setResumePreview] = useState('');

  const [role, setRole] = useState("");

  const handleAvatar = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setAvatarPreview(reader.result);
        setAvatar(file);
      };
    };
  };



  const handleRegistration = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !password || !gender || !role || !avatar) {
      console.log("Please fill out all fields.");
      return;
    }
    if (name === "") {
      console.log("Please enter your name");
    }
    else if (email === "") {
      console.log("Please enter your email");
    }
    else if (password === "") {
      console.log("Please enter your password");
    }
    else if (phone === "" || phone.length < 10) {
      console.log("Please enter valid phone number");
    }
    else if (role === "") {
      console.log("Please select your role");
    }
    else if (gender === "") {
      console.log("Please select your gender");
    }
    else if (avatar === null) {
      console.log("Please upload your Image");
    }
    else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("role", role);
      formData.append("avatar", avatar);
      formData.append("gender", gender);
      formData.append("resume", resume);
      formData.append("college", college);
      formData.append("yearOfStudy", yearOfStudy);
      formData.append("course", course);
      formData.append("techStack", techStack);
      try {
        const { data } = await axios.post(
          "http://localhost:8000/api/v1/user/registerUser",
          formData,
          {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
          }
        );


        setName("");
        setEmail("");
        setPhone("");
        setGender("");
        setPassword("");
        setRole("");
        setCollege("");
        setCourse("");
        setResume("");
        setResumePreview("");
        setTechStack("");
        setYearOfStudy("")
        console.log("User register successfully");
      } catch (error) {
        console.log("Failed to register user");
      }
    };
  }

  return (
    <div className="mx-auto px-6 shaow-xl rounded-lg py-12 flex bg-white items-center justify-center">

      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-4xl font-bold mb-6 text-center text-white-800">Sign Up</h2>
        <form onSubmit={handleRegistration} className="space-y-6">
          <div className="flex justify-center">
            <img
              src={avatarPreview  ? `${avatarPreview}` : "/docHolder.jpg"}
              alt="Avatar Preview"
              className="w-32 h-32 object-cover bg-purple-100 text-sm rounded-full mb-4"
            />
          </div>
          <div className="flex justify-center">
            <input type="file" onChange={handleAvatar} className="text-white-700" />
          </div>

          <div className="flex justify-center">
          <img
              src={resumePreview  ? `${resumePreview}` : "/resume.jpg"}
              alt="Resume Preview"
              className="w-32 h-32 object-cover bg-purple-100 text-sm rounded-full mb-4"
            />
          </div>
          <div className="flex justify-center">
            <input type="file" onChange={handleAvatar} className="text-white-700" />
          </div>


          <div className="relative">

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="relative">

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="relative">

            <input
              type="tel"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="relative">

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>


          <div className="relative">

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="relative">

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Role</option>
              <option value="User">User</option>
            </select>
          </div>


          <div className="relative">
          <input
              type="text"
              placeholder="College Name"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>



          <div className="relative">

            <select
              value={yearOfStudy}
              onChange={(e) => setYearOfStudy(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Year Of Study</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

 
          

          <div className="relative">

            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Course</option>
              <option value="BE/BTech">BE/BTech</option>
              <option value="Others">Other</option>
        
            </select>
          </div>

  
          <div className="relative">
          <input
              type="text"
              placeholder="Tech Stack"
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <p className="mb-0">Already Registered?</p>
            <Link href="/sign-in" className="text-red-600 hover:underline">
              Login Now
            </Link>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-700">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
