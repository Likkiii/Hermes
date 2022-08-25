import logo from './logo.svg';
import Signup from './components/Signup';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
