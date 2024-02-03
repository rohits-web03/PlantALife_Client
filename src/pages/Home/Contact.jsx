import React from 'react';

const ContactUsSection = () => {
  return (
    <div id="contact-us" className="bg-gradient-to-r from-green-400 to-blue-500 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-green-600 mb-4">Reach Out</h3>
            <p className="text-lg text-white mb-6">Have questions or feedback? We'd love to hear from you! Drop us a message and our team will get back to you as soon as possible.</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-md font-medium text-white text-left">Your Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 bg-white bg-opacity-50 border  rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" placeholder="Enter your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-md font-medium text-white text-left">Your Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 bg-white bg-opacity-50 border  rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" placeholder="Enter your email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-md font-medium text-white text-left">Your Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-4 py-3 bg-white bg-opacity-50 border  rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" placeholder="Enter your message"></textarea>
              </div>
              <div>
                <button type="submit" className="bg-white text-green-600 font-semibold py-3 px-8 rounded-md shadow-md hover:bg-green-200 transition duration-300 ease-in-out">Send Message</button>
              </div>
            </form>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-green-600 mb-4">Join the Community</h3>
            <p className="text-lg text-white mb-6">Connect with like-minded individuals, share your experiences, and stay updated on the latest news and events. Follow us on social media and join the conversation!</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-green-600 transition duration-300 ease-in-out">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.202 7.801H15.75c-.398 0-.75.301-.75.699v1.5h2.25v2.1h-2.25v6.6h-2.7v-6.6h-1.8V9.3h1.8v-.9c0-1.65 1.05-2.4 2.7-2.4h1.65v2.101z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-green-600 transition duration-300 ease-in-out">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M23.997 11.05c-.012 5.34-4.324 9.659-9.662 9.669-5.34.01-9.657-4.305-9.666-9.645-.01-5.337 4.308-9.658 9.646-9.668 5.336-.01 9.656 4.31 9.658 9.644v.004zM10.434 18.07v-6.955h-1.8v6.955h1.8zm-.9-8.75c-2.13 0-3.6-1.47-3.6-3.405 0-1.944 1.47-3.415 3.6-3.415s3.6 1.47 3.6 3.414c0 1.935-1.47 3.405-3.6 3.405zm7.566 9.195v-2.31c0-.3-.225-.526-.526-.526h-1.804c-.3 0-.526.225-.526.526v2.31c0 .3.225.526.526.526h1.804c.3 0 .526-.226.526-.526zm2.25-5.241c0-.3-.224-.525-.525-.525h-2.102c-.3 0-.525.225-.525.525v5.52c0 .3.225.525.525.525h2.102c.3 0 .525-.225.525-.525v-5.52zm-5.852-6.536h1.8v-.9h-1.8v.9zm5.24 0h1.8v-.9h-1.8v.9z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-green-600 transition duration-300 ease-in-out">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.202 7.801H15.75c-.398 0-.75.301-.75.699v1.5h2.25v2.1h-2.25v6.6h-2.7v-6.6h-1.8V9.3h1.8v-.9c0-1.65 1.05-2.4 2.7-2.4h1.65v2.101z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
