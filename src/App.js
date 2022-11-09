import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import socketIOClient from 'socket.io-client';
import './App.css';
import { useEffect, useState } from 'react';
const ENDPOINT = "http://localhost:3001";

const App = () => {
  const [resp, setResp] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("EstabConn", (data) => {
      console.log(data)
      setResp(data);
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
