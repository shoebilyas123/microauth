import React from 'react';
import { Github } from 'lucide-react';

import Auth from '@/components/organisms/auth';
import { Help } from '@/components/organisms/help';

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] overflow-hidden">
      <Auth />
    </div>
  );
}

export default App;
