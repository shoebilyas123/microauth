import React from 'react';
import { Github } from 'lucide-react';

import Auth from '@/components/organisms/auth';

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] overflow-hidden">
      <Auth />
      <div className="mt-2 flex flex-row items-center space-x-2">
        <p>Code available</p>
        <a
          href="https://github.com/shoebilyas123"
          className="text-sky-900 hover:text-sky-600 hover:underline active:text-sky-800"
        >
          @Github
        </a>
      </div>
    </div>
  );
}

export default App;
