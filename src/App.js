import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
