import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Navbar() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
        const response = await axios.get('http://localhost:5000/login/success', {
      withCredentials: true,
    });

    console.log(response)
    setUser(response.data.user)
    } catch (error) {
        console.log(error);
    }
    
  };

  useEffect(() => {
    getUser();
  }, []);
  return <div>Navbar</div>;
}

export default Navbar;
