import React from 'react';
import './Dashboard.css';

const Navbar = () => {
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
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                  href='#nil'
                >
                  <span className='text-base ml-2'>Groups</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                  href='#nil'
                >
                  <span className='text-base ml-2'>Invite</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                  href='#nil'
                >
                  <span className='text-base ml-2'>Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class='grid grid-cols-3 grid-flow-row gap-y-5 w-full py-5 px-10 h-fit'>
        <div class='flex w-[85%] transform transition duration-500 hover:scale-105 hover:cursor-pointer'>
          <div class='block p-3 bg-slate-200 rounded-lg shadow-lg border-2 border-solid border-gray-200'>
            <div class='flex flex-row justify-between'>
              <h5 class='text-gray-900 text-2xl leading-tight font-medium mb-2'>
                Group1
              </h5>
              <div class='inline'>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-blue-500 hover:text-blue-700 border-blue-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-blue-700 hover:shadow-lg focus:border-blue-700 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-pen'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-yellow-400 hover:text-yellow-500 border-yellow-400 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-yellow-600 hover:shadow-lg focus:border-yellow-600 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-eye'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 text-red-500 hover:text-red-700 border-red-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-red-700 hover:shadow-lg focus:border-red-700 border-2 border-solid focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-trash-can'></i>
                </button>
              </div>
            </div>
            <p class='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div class='flex w-[85%] transform transition duration-500 hover:scale-105 hover:cursor-pointer'>
          <div class='block p-3 bg-slate-200 rounded-lg shadow-lg border-2 border-solid border-gray-200'>
            <div class='flex flex-row justify-between'>
              <h5 class='text-gray-900 text-2xl leading-tight font-medium mb-2'>
                Group2
              </h5>
              <div class='inline'>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-blue-500 hover:text-blue-700 border-blue-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-blue-700 hover:shadow-lg focus:border-blue-700 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-pen'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-yellow-400 hover:text-yellow-500 border-yellow-400 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-yellow-600 hover:shadow-lg focus:border-yellow-600 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-eye'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 text-red-500 hover:text-red-700 border-red-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-red-700 hover:shadow-lg focus:border-red-700 border-2 border-solid focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-trash-can'></i>
                </button>
              </div>
            </div>
            <p class='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div class='flex w-[85%] transform transition duration-500 hover:scale-105 hover:cursor-pointer'>
          <div class='block p-3 bg-slate-200 rounded-lg shadow-lg border-2 border-solid border-gray-200'>
            <div class='flex flex-row justify-between'>
              <h5 class='text-gray-900 text-2xl leading-tight font-medium mb-2'>
                Group3
              </h5>
              <div class='inline'>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-blue-500 hover:text-blue-700 border-blue-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-blue-700 hover:shadow-lg focus:border-blue-700 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-pen'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-yellow-400 hover:text-yellow-500 border-yellow-400 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-yellow-600 hover:shadow-lg focus:border-yellow-600 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-eye'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 text-red-500 hover:text-red-700 border-red-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-red-700 hover:shadow-lg focus:border-red-700 border-2 border-solid focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-trash-can'></i>
                </button>
              </div>
            </div>
            <p class='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div class='flex w-[85%] transform transition duration-500 hover:scale-105 hover:cursor-pointer'>
          <div class='block p-3 bg-slate-200 rounded-lg shadow-lg border-2 border-solid border-gray-200'>
            <div class='flex flex-row justify-between'>
              <h5 class='text-gray-900 text-2xl leading-tight font-medium mb-2'>
                Group4
              </h5>
              <div class='inline'>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-blue-500 hover:text-blue-700 border-blue-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-blue-700 hover:shadow-lg focus:border-blue-700 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-pen'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-yellow-400 hover:text-yellow-500 border-yellow-400 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-yellow-600 hover:shadow-lg focus:border-yellow-600 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-eye'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 text-red-500 hover:text-red-700 border-red-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-red-700 hover:shadow-lg focus:border-red-700 border-2 border-solid focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-trash-can'></i>
                </button>
              </div>
            </div>
            <p class='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div class='flex w-[85%] transform transition duration-500 hover:scale-105 hover:cursor-pointer'>
          <div class='block p-3 bg-slate-200 rounded-lg shadow-lg border-2 border-solid border-gray-200'>
            <div class='flex flex-row justify-between'>
              <h5 class='text-gray-900 text-2xl leading-tight font-medium mb-2'>
                Group5
              </h5>
              <div class='inline'>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-blue-500 hover:text-blue-700 border-blue-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-blue-700 hover:shadow-lg focus:border-blue-700 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-pen'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-yellow-400 hover:text-yellow-500 border-yellow-400 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-yellow-600 hover:shadow-lg focus:border-yellow-600 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-eye'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 text-red-500 hover:text-red-700 border-red-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-red-700 hover:shadow-lg focus:border-red-700 border-2 border-solid focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-trash-can'></i>
                </button>
              </div>
            </div>
            <p class='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div class='flex w-[85%] transform transition duration-500 hover:scale-105 hover:cursor-pointer'>
          <div class='block p-3 bg-slate-200 rounded-lg shadow-lg border-2 border-solid border-gray-200'>
            <div class='flex flex-row justify-between'>
              <h5 class='text-gray-900 text-2xl leading-tight font-medium mb-2'>
                Group6
              </h5>
              <div class='inline'>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-blue-500 hover:text-blue-700 border-blue-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-blue-700 hover:shadow-lg focus:border-blue-700 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-pen'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-yellow-400 hover:text-yellow-500 border-yellow-400 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-yellow-600 hover:shadow-lg focus:border-yellow-600 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-eye'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 text-red-500 hover:text-red-700 border-red-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-red-700 hover:shadow-lg focus:border-red-700 border-2 border-solid focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-trash-can'></i>
                </button>
              </div>
            </div>
            <p class='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div class='flex w-[85%] transform transition duration-500 hover:scale-105 hover:cursor-pointer'>
          <div class='block p-3 bg-slate-200 rounded-lg shadow-lg border-2 border-solid border-gray-200'>
            <div class='flex flex-row justify-between'>
              <h5 class='text-gray-900 text-2xl leading-tight font-medium mb-2'>
                Group7
              </h5>
              <div class='inline'>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-blue-500 hover:text-blue-700 border-blue-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-blue-700 hover:shadow-lg focus:border-blue-700 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-pen'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-yellow-400 hover:text-yellow-500 border-yellow-400 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-yellow-600 hover:shadow-lg focus:border-yellow-600 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-eye'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 text-red-500 hover:text-red-700 border-red-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-red-700 hover:shadow-lg focus:border-red-700 border-2 border-solid focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-trash-can'></i>
                </button>
              </div>
            </div>
            <p class='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div class='flex w-[85%] transform transition duration-500 hover:scale-105 hover:cursor-pointer'>
          <div class='block p-3 bg-slate-200 rounded-lg shadow-lg border-2 border-solid border-gray-200'>
            <div class='flex flex-row justify-between'>
              <h5 class='text-gray-900 text-2xl leading-tight font-medium mb-2'>
                Group8
              </h5>
              <div class='inline'>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-blue-500 hover:text-blue-700 border-blue-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-blue-700 hover:shadow-lg focus:border-blue-700 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-pen'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-yellow-400 hover:text-yellow-500 border-yellow-400 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-yellow-600 hover:shadow-lg focus:border-yellow-600 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-eye'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 text-red-500 hover:text-red-700 border-red-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-red-700 hover:shadow-lg focus:border-red-700 border-2 border-solid focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-trash-can'></i>
                </button>
              </div>
            </div>
            <p class='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div class='flex w-[85%] transform transition duration-500 hover:scale-105 hover:cursor-pointer'>
          <div class='block p-3 bg-slate-200 rounded-lg shadow-lg border-2 border-solid border-gray-200'>
            <div class='flex flex-row justify-between'>
              <h5 class='text-gray-900 text-2xl leading-tight font-medium mb-2'>
                Group9
              </h5>
              <div class='inline'>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-blue-500 hover:text-blue-700 border-blue-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-blue-700 hover:shadow-lg focus:border-blue-700 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-pen'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 mr-2 text-yellow-400 hover:text-yellow-500 border-yellow-400 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-yellow-600 hover:shadow-lg focus:border-yellow-600 border-2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-eye'></i>
                </button>
                <button
                  type='button'
                  class='px-2 py-1 text-red-500 hover:text-red-700 border-red-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-red-700 hover:shadow-lg focus:border-red-700 border-2 border-solid focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ring-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  <i class='fa-solid fa-trash-can'></i>
                </button>
              </div>
            </div>
            <p class='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
