import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Navbar() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/login/success', {
        withCredentials: true,
      });

      if (response.data.user) {
        console.log(response)
        setUser(response.data.user)
      }
    } catch (error) {
      console.log(error);
    }

  };

  const logout = () => {
    window.open("http://localhost:5000/logout", '_self')
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className='flex justify-between  px-2  py-4 md:px-7'>

      <Link to="/" className='font-bold text-[#888043] text-4xl  '>EduQuest</Link>
      <div className='flex gap-3 justify-center items-center'>
        {
          Object.keys(user).length > 0 ?
            (
              <div>
                <div className='' onClick={logout}>Logout</div>

              </div>
            ) : (
              <div className='flex gap-3  tracking-wide text-lg text-[#3c4d03]'>

                <Link to="/login" className='hover:underline font-semibold mx-2'>Login </Link>
                <Link to="/register" className='hover:underline font-semibold mx-2'>Signup </Link>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default Navbar;
