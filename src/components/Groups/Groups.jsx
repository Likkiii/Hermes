import React from 'react';
import './Groups.css';

function Groups() {
  return (
    <li Name='group w-full flex text-green-500 bg-slate-900 hover:bg-slate-800 justify-start pl-5 py-5 text-xl cursor-pointer '>
      <div Name='flex items-center'>
        <div Name='block pr-2'>
          <img
            alt='avatar'
            src='https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            Name='rounded-full h-10 w-10 '
          />
        </div>
        <p Name='w-36 truncate text-left pl-2 pb-0.5'>Group1</p>
      </div>
    </li>
  );
}

export default Groups;
