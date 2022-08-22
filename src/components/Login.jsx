import React from 'react';

const Login = () => {
  return (
    <div class='flex items-center justify-center min-h-screen bg-slate-800'>
      <div class='px-8 py-6 mx-4 mt-4 text-left bg-slate-900 shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3'>
        <div className='flex justify-center text-5xl text-white'>HERMES</div>
        <form action=''>
          <div class='mt-4'>
            <div>
              <i class='text-green-500' className='fas fa-user'></i>
              <label class='block' className='text-green-500' for='Name'>
                Name
              </label>
              <input
                type='text'
                placeholder='Name'
                class='w-full px-4 py-2 mt-2 border-b-2 focus:outline-none focus:border-green-600 bg-slate-900'
              />
            </div>
            <div class='mt-4'>
              <label class='block' className='text-green-500' for='email'>
                Email
              </label>
              <input
                type='text'
                placeholder='Email'
                class='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600'
              />
            </div>
            <div class='mt-4'>
              <label class='block' className='text-green-500'>
                Password
              </label>
              <input
                type='password'
                placeholder='Password'
                class='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600'
              />
            </div>
            <div class='mt-4'>
              <label class='block' className='text-green-500'>
                Confirm Password
              </label>
              <input
                type='password'
                placeholder='Password'
                class='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600'
              />
            </div>
            <span class='text-xs text-red-400'>Password must be same!</span>
            <div class='flex'>
              <button class='w-full px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700'>
                Create Account
              </button>
            </div>
            <div class='mt-6 text-white'>
              Already have an account?
              <a class='text-green-500 hover:underline pl-2' href='#'>
                Log in
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
