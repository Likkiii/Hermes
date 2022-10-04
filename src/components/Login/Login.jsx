import React, { useState, useEffect } from 'react';
import '../Signup/Signup.css';
import neon from '../../assets/neon.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const loginUser = (e) => {
    setUser({
      username: e.target.username.value,
      password: e.target.password.value,
    });
  };

  useEffect(() => {
    axios
      .post('http://localhost:3001/auth/login', user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <img className='neon relative' src={neon} alt='neon' />
      <div className='box absolute flex flex-col'>
        <div className='header flex justify-center font-bold text-5xl text-slate-900 rounded-t-lg px-8 py-1'>
          HERMES
        </div>
        <div className='flex px-8 py-6 text-left shadow-lg rounded-b-lg bg-slate-900'>
          <form onSubmit={loginUser}>
            <div className='mt-4'>
              <div>
                <i className='text-green-600 fas fa-user'></i>
                <label className=' text-green-500 pl-2' for='Username'>
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
                <i className='text-green-600 fa-solid fa-key hover'></i>
                <label className=' text-green-500 pl-2'>Password</label>
                <input
                  type={passwordType}
                  placeholder='Enter your password...'
                  name='password'
                  className='w-full px-4 py-2 mt-2 text-white border-b-2 focus:outline-none border-green-600 bg-slate-900'
                />
                {passwordType === 'password' ? (
                  <i
                    className='fas fa-eye-slash text-green-600 absolute right-10 mt-4 cursor-pointer'
                    onClick={togglePassword}
                  ></i>
                ) : (
                  <i
                    className='fas fa-eye text-green-600 absolute right-10 mt-4 cursor-pointer'
                    onClick={togglePassword}
                  ></i>
                )}
              </div>
              <div className='flex'>
                <button className='btn w-full px-6 py-2 mt-4 text-gray-300 font-semibold text-md rounded-lg'>
                  Login
                </button>
              </div>
              <div className='mt-6 text-gray-300'>
                Don't have an account?
                <Link to='/' className='text-green-500 hover:underline pl-2'>
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
