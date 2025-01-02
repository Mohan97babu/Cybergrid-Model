import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from "../../constants/images/cybergrid-logo.jpeg";

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContinueClick = () => {
    navigate('/dashboard');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleBackClick = () => {
    navigate('/');
  };
  
  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center p-4">
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <button className="flex items-center text-gray-700 hover:text-blue-500" onClick={handleBackClick}>
          <span className="ml-2 text-gray-700 font-medium group-hover:text-blue-500">Admin Login</span>
          <Icon icon="mdi:arrow-right" className="h-5 w-5 ml-2 mt-1 group-hover:text-blue-500" />
        </button>
        <button className="flex items-center text-gray-700 hover:text-blue-500" onClick={handleSignUpClick}>
          <span className="font-medium">Sign Up</span>
          <Icon icon="mdi:arrow-right" className="h-5 w-5 ml-2 mt-1" />
        </button>
      </div>
      <div className="w-full max-w-md p-8 border rounded shadow-sm bg-white mt-20">
        <div className="text-center mb-4">
        <img src={logo} alt="Logo" className="mb-3 mx-auto w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4" />
          <h2 className="mt-2 text-xl font-semibold">User Login</h2>
        </div>
        <form>
          {!isEmailEntered ? (
            <>
              <div className="mb-4">
                <label htmlFor="formBasicEmail" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="formBasicEmail"
                  placeholder="Email Address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  id="formBasicCheckbox"
                  className="mr-2 leading-tight"
                />
                <label htmlFor="formBasicCheckbox" className="text-sm">Remember me</label>
              </div>
              <button
                type="button"
                className="w-full mb-3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={!email}
                onClick={handleContinueClick}
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="w-full mb-2 text-sm text-right text-indigo-600 hover:underline"
                onClick={() => setIsEmailEntered(false)}
              >
                Reset Email
              </button>
              <div className="mb-5">
                <label htmlFor="formBasicPassword" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="formBasicPassword"
                  placeholder="User Password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                type="submit"
                className="w-full mb-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserLogin;