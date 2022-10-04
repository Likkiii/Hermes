import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import neon from '../../assets/neon.jpg';
import axios from 'axios';
import { useEffect } from 'react';

const Signup = () => {
  const regUser = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <img className='neon relative' src={neon} alt='neon' />
      <div className='box absolute flex flex-col'>
        <div className='header flex justify-center font-bold text-5xl text-slate-900 rounded-t-lg px-8 py-1'>
          HERMES
        </div>
        <div className='flex px-8 py-6 text-left bg-slate-900 shadow-lg rounded-b-lg'>
          <form onSubmit={regUser}>
            <div className='mt-4'>
              <div>
                <i className='text-green-600 fas fa-user'></i>
                <label
                  class='block'
                  className=' text-green-500 pl-2'
                  for='Username'
                >
                  Username
                </label>
                <input
                  type='text'
                  placeholder='Enter your username...'
                  name='username'
                  className='w-full px-4 py-2 mt-2 text-white border-b-2 focus:outline-none border-green-600 bg-slate-900'
                />
              </div>
              <div className='mt-4'>
                <i className='text-green-600 fas fa-envelope'></i>
                <label
                  class='block'
                  className=' text-green-500 pl-2'
                  for='email'
                >
                  Email
                </label>
                <input
                  type='text'
                  placeholder='Enter your email...'
                  name='email'
                  className='w-full px-4 py-2 mt-2 text-white border-b-2 focus:outline-none border-green-600 bg-slate-900'
                />
              </div>
              <div className='mt-4'>
                <i className='text-green-600 fa-solid fa-key hover'></i>
                <label class='block' className=' text-green-500 pl-2'>
                  Password
                </label>
                <input
                  type='password'
                  placeholder='Enter your password...'
                  name='password'
                  className='w-full px-4 py-2 mt-2 text-white border-b-2 focus:outline-none border-green-600 bg-slate-900'
                />
              </div>
              <div className='mt-4'>
                <label class='block' className=' text-green-500'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  placeholder='Enter your password again...'
                  className='w-full px-4 py-2 mt-2 text-white border-b-2 focus:outline-none border-green-600 bg-slate-900'
                />
              </div>
              <span className='text-xs text-red-400'>
                Password must be same!
              </span>
              <div className='flex'>
                <button className='btn w-full px-6 py-2 mt-4 text-gray-300 font-semibold text-md rounded-lg'>
                  Create Account
                </button>
              </div>
              <div className='mt-6 text-gray-300'>
                Already have an account?
                <Link
                  to='/login'
                  className='text-green-500 hover:underline pl-2'
                >
                  Log in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
