import Auth from '@/components/organisms/auth';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/home';
import ProtectedRoutes from './components/organisms/routes/protected';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Auth />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoutes>
        <Home />
      </ProtectedRoutes>
    ),
  },
]);

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
