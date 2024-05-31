import React from 'react';
import { LoginComponent } from './login';
import { Help } from '../help';

const Auth = () => {
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
