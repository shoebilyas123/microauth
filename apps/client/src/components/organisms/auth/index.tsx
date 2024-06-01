import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LoginComponent } from './login';
import { Help } from '../help';
import { RootState } from '@/state/store';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  return (
    <>
      <Help />
      <LoginComponent />
      <div className="mt-2 flex flex-row items-center space-x-2">
        <p>Code available</p>
        <a
          href="https://github.com/shoebilyas123"
          className="text-sky-900 hover:text-sky-600 hover:underline active:text-sky-800"
        >
          @Github
        </a>
      </div>
    </>
  );
};

export default Auth;
