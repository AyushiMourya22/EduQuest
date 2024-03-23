import React, { useState } from 'react';
import AuthNavbar from '../components/AuthNavbar';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import axios from 'axios';
import Navbar from '../components/Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(
        'http://localhost:5000/api/auth/login',
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(user);
      if (user) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex  flex-1 flex-col justify-start px-6 py-12 lg:px-8 bg-[#ECEEE3]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl md:text-3xl font-bold leading-9 tracking-tight text-[#3c4d03]">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6  pb-2" action="#" method="POST" >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3c4d03] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-[#888043] hover:text-[#3c4d03]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3c4d03] focus:border-hidden sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex flex-col  ">
              <button
                type="submit"
                className="flex w-full my-2 md:my-4 justify-center rounded-md bg-[#888043] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#3c4d03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
              >
                Log In
              </button>
              <div className="text-sm flex justify-end mt-2">
                <Link
                  to="/register"
                  className="font-semibold text-[#888043] hover:text-[#3c4d03]"
                >
                  Don't have an account? Create
                </Link>
              </div>
            </div>
          </form>
        </div>
        <p className="flex justify-center font-bold my-3 text-[#3c4d03]">or</p>
        <div className="flex justify-center items-center">
          <GoogleButton
            onClick={() =>
              window.open('http://localhost:5000/auth/google/callback', '_self')
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
