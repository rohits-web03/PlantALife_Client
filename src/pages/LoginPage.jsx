import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Cookies from "js-cookie";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://plantalife-node-server.onrender.com/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }) // Send email and password in the request body
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const { user, accessToken, refreshToken } = data;

      // Set user data in local storage
      localStorage.setItem('user', JSON.stringify(user));

      // Set cookies
      Cookies.set('accessToken', accessToken, { expires: 1 });
      Cookies.set('refreshToken', refreshToken, { expires: 10 });

      // Reset form fields
      setEmail('');
      setPassword('');

      // Redirect to home page after successful login
      navigate('/');

      // Show an alert or handle login success in other ways
      alert('Login successful');
      console.log('Login successful');
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login failure
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-white mb-4 flex flex-col">
          Welcome Back to
          <span className='font-bold text-green text-4xl text-center p-1 font-serif'>PlantALife</span>
        </h2>
        <div className="bg-white shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 py-8 px-4 sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
            </div>

            <div className="text-sm text-center flex justify-start items-center gap-2">
              <p className="text-gray-600">Don't have an account?</p>
              <Link to="/signup" className="font-medium text-green-600 hover:text-green-500">
                Register
              </Link>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
