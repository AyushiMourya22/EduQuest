import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import RegisteredCourses from '../components/RegisteredCourses';

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RegisteredCourses />
    </div>
  );
}

export default Home;
