import React, { useState } from 'react';
import './Dashboard.css';
import Groups from '../Groups/Groups';
import logout from '../../assets/logout.svg';

const Dashboard = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <nav className='relative header flex flex-wrap items-center justify-between px-2 lg:px-10 xl:px-12 2xl:px-20 py-3 mb-3'>
        <div className='container px-4 mx-auto flex flex-wrap'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <a
              className='font-black text-4xl inline-block mr-4 whitespace-nowrap uppercase text-slate-900 mt-0.5'
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
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto mt-0.5'>
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
              <li className='nav-item'></li>
              <a
                className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-900 hover:opacity-75'
                href='/'
              >
                <img
                  src={logout}
                  alt='logout'
                  className='absolute right-6 w-6 h-6 hover:opacity-75'
                />
              </a>
            </ul>
          </div>
        </div>
      </nav>
      <div className='flex flex-row'>
        <div className='sidebar bg-slate-900 w-1/5 max-h-screen'>
          <input
            type='text'
            placeholder='Search for a group...'
            className='bg-slate-700 text-white w-4/5 mt-2 ml-4 pl-3 py-1 rounded-lg mb-3'
          />
          <div className='min-h-screen'>
            <div className='groups max-h-screen overflow-y-scroll'>
              <Groups />
            </div>
          </div>
        </div>

        <div className='flex flex-col bg-slate-800 w-4/5 max-h-screen ml-1'>
          <div className='bg-slate-900 w-full h-[78%]'>
            <div className='py-2 px-3 bg-slate-800 h-[10%] flex flex-row justify-between items-center'>
              <div className='flex items-center'>
                <div>
                  <img
                    alt='avatar'
                    src='https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                    className='rounded-full h-10 w-10 '
                  />
                </div>
                <div className='ml-4'>
                  <p className='text-green-500 '>Group 1</p>
                  <p className='text-green-500 text-xs mt-1'>
                    Thomas, Shreyas, Shravan, Additya
                  </p>
                </div>
              </div>

              <div className='flex'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                  >
                    <path
                      fill='#263238'
                      fill-opacity='.5'
                      d='M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z'
                    ></path>
                  </svg>
                </div>
                <div className='ml-6'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                  >
                    <path
                      fill='#263238'
                      fill-opacity='.5'
                      d='M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z'
                    ></path>
                  </svg>
                </div>
                <div className='ml-6'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                  >
                    <path
                      fill='#263238'
                      fill-opacity='.6'
                      d='M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z'
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className='chat flex-1 h-[90%] mx-16 overflow-y-scroll'>
              <div className='py-2 px-3'>
                <div className='flex justify-center mb-2'>
                  <div className='rounded bg-slate-700 py-2 px-4'>
                    <p className='text-sm text-slate-400 uppercase'>
                      October 3, 2022
                    </p>
                  </div>
                </div>

                <div className='flex justify-center mb-4'>
                  <div className='rounded bg-slate-700 py-2 px-4'>
                    <p className='text-xs text-slate-400'>
                      Messages to this chat and calls are now secured with
                      end-to-end encryption. Tap for more info.
                    </p>
                  </div>
                </div>

                <div className='flex mb-2'>
                  <div className='rounded bg-slate-600 py-2 px-3'>
                    <p className='text-sm text-red-600'>Thomas Biju</p>
                    <p className='text-sm text-slate-300 mt-1'>
                      Hi everyone! Glad you could join! I am making a new movie.
                    </p>
                    <p className='text-right text-xs text-slate-300 mt-1'>
                      12:45 pm
                    </p>
                  </div>
                </div>

                <div className='flex mb-2'>
                  <div className='rounded bg-slate-600 py-2 px-3'>
                    <p className='text-sm text-purple-500'>Shreyas Bhardwaj</p>
                    <p className='text-sm text-slate-300 mt-1'>
                      Hi all! I have one question for the movie
                    </p>
                    <p className='text-right text-xs text-slate-300 mt-1'>
                      12:45 pm
                    </p>
                  </div>
                </div>

                <div className='flex mb-2'>
                  <div className='rounded bg-slate-600 py-2 px-3'>
                    <p className='text-sm text-orange-600'>Additya Singhal</p>
                    <p className='text-sm text-slate-300 mt-1'>
                      Are you all coming for this one?
                    </p>
                    <p className='text-right text-slate-300 text-xs mt-1'>
                      12:45 pm
                    </p>
                  </div>
                </div>

                <div className='flex justify-end mb-2'>
                  <div className='rounded bg-slate-600 py-2 px-3'>
                    <p className='text-sm text-slate-300 mt-1'>Hi guys.</p>
                    <p className='text-right text-slate-300 text-xs mt-1'>
                      12:45 pm
                    </p>
                  </div>
                </div>

                <div className='flex justify-end mb-2'>
                  <div className='rounded bg-slate-600 py-2 px-3'>
                    <p className='text-sm text-slate-300 mt-1'>Count me in!</p>
                    <p className='text-right text-slate-300 text-xs mt-1'>
                      12:45 pm
                    </p>
                  </div>
                </div>

                <div className='flex mb-2'>
                  <div className='rounded bg-slate-600 py-2 px-3'>
                    <p className='text-sm text-blue-600'>Shravan Prakash</p>
                    <p className='text-sm text-slate-300 mt-1'>
                      Get Likhit on this movie ASAP!
                    </p>
                    <p className='text-right text-slate-300 text-xs mt-1'>
                      12:45 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-row w-full'>
            <input
              type='text'
              placeholder='Type a message...'
              className='bg-slate-700 text-white w-4/5 mt-4 ml-20 h-10 rounded-lg p-2'
            />
            <div className='ml-5 mt-6'>
              <svg
                className='bg-slate-800 text-slate-500 hover:cursor-pointer'
                viewBox='0 0 24 24'
                width='24'
                height='24'
              >
                <path
                  fill='currentColor'
                  d='M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z'
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
