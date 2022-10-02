import React from 'react';
import './Dashboard.css';
import Groups from '../Groups/Groups';

const Dashboard = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div>
      <nav className='relative header flex flex-wrap items-center justify-between px-2 lg:px-10 xl:px-12 2xl:px-20 py-3 mb-3'>
        <div className='container px-4 mx-auto flex flex-wrap'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <a
              className='font-black text-4xl inline-block mr-4 whitespace-nowrap uppercase text-slate-900'
              href='/dashboard'
            >
              Hermes
            </a>
            <button
              className='text-slate-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-900 hover:opacity-75'
                  href='#nil'
                >
                  <span className='text-lg font-extrabold ml-2'>Groups</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-900 hover:opacity-75'
                  href='#nil'
                >
                  <span className='text-lg font-extrabold ml-2'>Invite</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-900 hover:opacity-75'
                  href='#nil'
                >
                  <span className='text-lg font-extrabold ml-2'>Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='flex flex-row'>
        <div className='bg-slate-900 w-1/5 max-h-screen'>
          <input
            type='text'
            placeholder='Search for a group...'
            className='bg-slate-700 w-4/5 mt-2 ml-4 pl-3 py-1 rounded-lg mb-3'
          />
          <div className='groups max-h-screen overflow-scroll'>
            <Groups />
            <Groups />
            <Groups />
            <Groups />
            <Groups />
            <Groups />
            <Groups />
            <Groups />
            <Groups />
            <Groups />
            <Groups />
            <Groups />
            <Groups />
            <Groups />
          </div>
        </div>
        <div className='flex flex-col bg-slate-800 w-4/5 max-h-screen ml-1'>
          <div className='bg-slate-900 w-full h-3/4'></div>
          <div className='h-1/4 w-3/4'>
            <input
              type='text'
              placeholder='Type a message...'
              className='bg-slate-700 absolute w-3/4 mt-5 ml-10 rounded-lg p-2'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
