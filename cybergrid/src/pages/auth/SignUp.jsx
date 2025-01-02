import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '../../constants/images/cybergrid-logo.jpeg';

const SignUp = () => {
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleUserLoginClick = () => {
    navigate('/');
  };

  const handleContinueClick = () => {
    setIsEmailEntered(true);
    if (role === 'admin') {
        navigate('/');
      } else {
        navigate('/user');
      }
  };

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center">
      <div className="absolute top-4 left-4 flex items-center z-10 group">
        <button className="flex items-center text-gray-700 hover:text-blue-500" onClick={handleUserLoginClick}>
          <span className="font-medium">User Login</span>
          <Icon icon="mdi:arrow-right" className="h-5 w-5 ml-2 mt-1" />
        </button>
      </div>
      <div className="w-full max-w-md p-8 border rounded shadow-sm bg-white">
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" className="mb-3 mx-auto w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4" />
          <h2 className="mt-2 text-xl font-semibold">Sign Up</h2>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="formBasicEmail" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="formBasicEmail"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="formBasicPassword" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="formBasicPassword"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="formBasicPhone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="formBasicPhone"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="formBasicCountry" className="block text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              id="formBasicCountry"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <div className="mt-2 flex items-center">
              <input
                type="radio"
                id="roleUser"
                name="role"
                value="user"
                checked={role === 'user'}
                onChange={() => setRole('user')}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              />
              <label htmlFor="roleUser" className="ml-2 block text-sm text-gray-700">User</label>
              <input
                type="radio"
                id="roleAdmin"
                name="role"
                value="admin"
                checked={role === 'admin'}
                onChange={() => setRole('admin')}
                className="ml-4 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              />
              <label htmlFor="roleAdmin" className="ml-2 block text-sm text-gray-700">Admin</label>
            </div>
          </div>
          <button
            type="button"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleContinueClick}
          >
            Continue
          </button>
          <div className="text-center my-3">
            <span className="text-sm">OR</span>
          </div>
          <button
            type="button"
            className="w-full py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center"
          >
            <Icon icon="mingcute:google-fill" width="24" height="24" className="mr-2" />
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;