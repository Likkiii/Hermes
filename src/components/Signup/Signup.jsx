import React from 'react';
import styles from './Signup.css';
import neon from '../../assets/neon.jpg';

const Signup = () => {
  return (
    <div class='flex items-center justify-center min-h-screen'>
      <img className='neon relative' src={neon} alt='neon' />
      <div className='{styles.box} absolute flex flex-col'>
        <div className='header flex justify-center font-bold text-5xl text-slate-900 rounded-t-lg px-8 py-1'>
          HERMES
        </div>
        <div class='flex px-8 py-6 text-left bg-slate-900 shadow-lg rounded-b-lg'>
          <form action=''>
            <div class='mt-4'>
              <div>
                <i class='text-green-600 fas fa-user'></i>
                <label
                  class='block'
                  className='text-green-500 pl-2'
                  for='Username'
                >
                  Username
                </label>
                <input
                  type='text'
                  placeholder='Enter your username...'
                  class='w-full px-4 py-2 mt-2 text-white border-b-2 focus:outline-none border-green-600 bg-slate-900'
                />
              </div>
              <div class='mt-4'>
                <i class='text-green-600 fas fa-envelope'></i>
                <label
                  class='block'
                  className='text-green-500 pl-2'
                  for='email'
                >
                  Email
                </label>
                <input
                  type='text'
                  placeholder='Enter your email...'
                  class='w-full px-4 py-2 mt-2 text-white border-b-2 focus:outline-none border-green-600 bg-slate-900'
                />
              </div>
              <div class='mt-4'>
                <i class='text-green-600 fa-solid fa-key hover'></i>
                <label class='block' className='text-green-500 pl-2'>
                  Password
                </label>
                <input
                  type='password'
                  placeholder='Enter your password...'
                  class='w-full px-4 py-2 mt-2 text-white border-b-2 focus:outline-none border-green-600 bg-slate-900'
                />
              </div>
              <div class='mt-4'>
                <label class='block' className='text-green-500'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  placeholder='Enter your password again...'
                  class='w-full px-4 py-2 mt-2 text-white border-b-2 focus:outline-none border-green-600 bg-slate-900'
                />
              </div>
              <span class='text-xs text-red-400'>Password must be same!</span>
              <div class='flex'>
                <button class='btn w-full px-6 py-2 mt-4 text-gray-300 font-semibold text-md rounded-lg'>
                  Create Account
                </button>
              </div>
              <div class='mt-6 text-gray-300'>
                Already have an account?
                <a class='text-green-500 hover:underline pl-2' href=''>
                  Log in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
