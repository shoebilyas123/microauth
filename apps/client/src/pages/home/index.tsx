import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Home</h1>
      <div className="mt-4 flex items-center space-x-2">
        <p
          onClick={() => navigate('/login')}
          className="text-sky-900 hover:text-sky-600 hover:underline active:text-sky-800"
        >
          Login
        </p>
        <p
          onClick={() => navigate('/')}
          className="text-sky-900 hover:text-sky-600 hover:underline active:text-sky-800"
        >
          Home
        </p>
      </div>
    </div>
  );
};

export default Home;
