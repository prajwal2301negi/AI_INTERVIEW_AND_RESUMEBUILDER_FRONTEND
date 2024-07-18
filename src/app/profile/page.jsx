'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";


const Profile = () => {
  const [user, setUser] = useState('');

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

  const deleteCustomer = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.delete(
        "http://localhost:8000/api/v1/user/deleteUser",
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-3xl w-full mx-auto bg-purple-200 p-6 rounded-lg shadow-lg">
        {user ? (
          <>
            <div className="flex justify-center py-6 bg-purple-200">
              <img
                src={user.avatar && user.avatar.url ? user.avatar.url : "default-image-url"}
                alt="Profile Image"
                className="h-48 w-48 object-cover shadow-xl rounded-full"
              />
            </div>
            <div className="text-center text-3xl font-bold text-white mb-4">{user.name}</div>
            <div className="text-white">
              <div className="mb-2">
                <strong>Email:</strong> {user.email}
              </div>
              <div className="mb-2">
                <strong>Tech Stack:</strong> {user.techStack}
              </div>
              <div className="mb-2">
                <strong>Year Of Study:</strong> {user.yearOfStudy}
              </div>
              <div className="mb-2">
                <strong>College:</strong> {user.college}
              </div>
              <div className="mb-2">
                <strong>Gender:</strong> {user.gender}
              </div>
              <div className="mb-2">
                <strong>Course:</strong> {user.course}
              </div>
              <div className="flex justify-center py-6 bg-purple-200">
                <img
                  src={user.resume && user.resume.url ? user.resume.url : "default-image-url"}
                  alt="Resume"
                  className="h-48 w-48 object-cover shadow-xl rounded-full"
                />
              </div>
              <button onClick={deleteCustomer} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Delete User</button>
            </div>
          </>
        ) : (
          <div className="text-center text-3xl font-bold text-white mb-4">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
