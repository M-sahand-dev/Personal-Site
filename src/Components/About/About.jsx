import React from 'react'
import Title from './About_Title'
import Info from './Info'
import Aboout__information_Section from './Aboout__information_Section'
import About_Experience from './About_Experience'
import About_Education from './About_Education'
import Skills from './Skills'

// General summary text for personal introduction
const info_text = "I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book."

// Additional information for extended profile description
const info_details = "Delivering work within time and budget which meets client's requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley."

// Utility function to calculate age based on birthdate
const calculateAge = (birthDate) => {
  const birthDateObj = new Date(birthDate);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDateObj.getFullYear();

  const currentMonth = currentDate.getMonth();
  const birthMonth = birthDateObj.getMonth();
  const currentDay = currentDate.getDate();
  const birthDay = birthDateObj.getDate();

  // Adjust age if birthday hasn't occurred yet this year
  if (birthMonth > currentMonth ||
    (birthMonth === currentMonth && birthDay > currentDay)) {
    age--;
  }

  return age;
}

// Static birthdate used to calculate age
const birthDate = '2007-10-28';
const age = calculateAge(birthDate);

// Main About component, receives dynamic data as props
const About = ({ education, experience, skills, language }) => {
  return (
    <div id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <Title />

        {/* Basic Info and Contact Section */}
        <div className="flex flex-col md:flex-row">
          <Info
            id={"info"}
            name={"Mehdi Leylaei"}
            Info={info_text}
            Info2={info_details}
          />

          <Aboout__information_Section
            id={"information"}
            classStyle={"flex justify-between border-b border-gray-700 py-2"}
            name={"Mehdi Leylaei"}
            email={"mehdileilaei443@gmail.com"}
            age={age}
            from={"Dezful , IRAN"}
          />
        </div>

        {/* Experience and Education Section */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row">
            <About_Experience experience={experience} />
            <About_Education education={education} />
          </div>
        </div>

        {/* Skills and Languages Section */}
        <Skills skills={skills} language={language} />
      </div>
    </div>
  )
}

export default About
