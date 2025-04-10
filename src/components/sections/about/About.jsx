import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 bg-red-200">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        About Me
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center">
        I am a passionate developer with a love for creating beautiful and
        functional web applications. My journey in the tech world has been an
        exciting adventure, and I am always eager to learn and grow.
      </p>
    </div>
  );
}

export default About;
