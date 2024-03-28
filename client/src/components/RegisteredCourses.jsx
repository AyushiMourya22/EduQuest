import React from 'react';
import CourseCard from './CourseCard';

function RegisteredCourses() {
  return (
    <div className="mt-5">
      <h1 className="flex justify-center font-semibold text-2xl">
        Your Courses
      </h1>
      <div className="flex flex-wrap justify-center items-center mt-3 ">
        <CourseCard className=" w-1/4 " />
        <CourseCard className=" w-1/4 " />
        <CourseCard className=" w-1/4 " />
        <CourseCard className=" w-1/4 " />
        <CourseCard className=" w-1/4 " />
      </div>
    </div>
  );
}

export default RegisteredCourses;
