import React from 'react';

const AboutUsPage = () => {
  return (
    <div id='about-us' className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="bg-white p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h2>
          <div className="text-lg leading-7 text-gray-700">
            <p className="mb-6">
              At PlantALife, we believe in the power of sustainable action to create a brighter future for our planet. Our mission is to inspire and reward individuals for their contributions towards environmental conservation and social impact.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Goals</h3>
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">Expand our platform beyond tree planting to include a diverse range of environmental and social initiatives.</li>
              <li className="mb-2">Enhance accessibility and usability to encourage widespread adoption of our platform and token.</li>
              <li className="mb-2">Foster partnerships with organizations and communities to amplify our impact and promote sustainability worldwide.</li>
              <li className="mb-2">Continuously innovate and evolve our technology to ensure transparency, security, and scalability.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Future Plans</h3>
            <p className="mb-6">
              In the coming years, we envision PlantALife becoming a global hub for environmental activism and social responsibility. Our roadmap includes expanding our reward system to encompass a broader spectrum of eco-friendly actions, advocating for sustainable practices in the blockchain industry, and launching educational initiatives to raise awareness about environmental issues.
            </p>
            <p>
              Together, we can make a positive impact on our planet and create a legacy of sustainability for future generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
