'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";


const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.get(
        "http://localhost:8000/api/v1/user/logoutUser",
        {
          withCredentials: true,
        }
      );

      setIsUserAuthenticated(false);

    } catch (err) {
      console.error(err.response.data.message);
    }
  };

  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };



  return (
    <>
      <div className="bg-gradient-to-b from-blue-500 to-blue-500 py-4 px-12 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-2xl">
            <Link href="/">
              <div className="flex items-center">
                <span>Interview</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            {isUserAuthenticated ? (
              <button
                className="text-white text-lg hover:text-white font-semibold flex items-center"
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            ) : (
              <Link href='/sign-in'>
              <button
                className="text-white text-lg hover:text-white font-semibold flex items-center"
                
              >
                LOGIN
              </button>
              </Link>
            )}
            {isUserAuthenticated && (
              <Link href="/profile">
                <div className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
                  Profile
                </div>
              </Link>
            )}

            <Link href="/about">
              <div className="flex items-center text-white">
                <span>AboutUs</span>
              </div>
            </Link>

            <Link href="/companies">
              <div className="flex items-center text-white">
                <span>Companies</span>
              </div>
            </Link>


            <Link href="/contact">
              <div className="flex items-center text-white">
                <span>ContactUs</span>
              </div>
            </Link>



            {isUserAuthenticated && (
              <Link href="/resume">
                <a className="text-white text-lg hover:text-white font-semibold flex items-center">
                  Build Resume
                </a>
              </Link>
            )}
          </div>





          {/* Mobile-Screen */}

          <div className="md:hidden">
            <button onClick={toggleSidebar} className="text-white">
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {sidebarOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            {isUserAuthenticated ? (
              <button
                className="text-white text-lg hover:text-white font-semibold flex items-center"
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            ) : (
              <Link href='/sign-in'> 
              <button
              className="text-white text-lg hover:text-white font-semibold flex items-center"
              
            >
              LOGIN
            </button></Link>
             
            )}
            {isUserAuthenticated && (
              <Link href="/profile">
                <a className="text-white text-lg hover:text-white font-semibold flex items-center">
                  Profile
                </a>
              </Link>
            )}

            <Link href="/about">
              <div className="flex items-center text-white">
                <span>AboutUs</span>
              </div>
            </Link>

            <Link href="/companies">
              <div className="flex items-center text-white">
                <span>Companies</span>
              </div>
            </Link>


            <Link href="/contact">
              <div className="flex items-center text-white">
                <span>ContactUS</span>
              </div>
            </Link>

            {isUserAuthenticated && (
              <Link href="/resume">
                <a className="text-white text-lg hover:text-white font-semibold flex items-center">
                  Build Resume
                </a>
              </Link>
            )}

          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
