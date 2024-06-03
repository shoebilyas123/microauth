import { useSelector } from 'react-redux';
import { FC, PropsWithChildren } from 'react';

import { RootState } from '@/state/store';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes: FC<PropsWithChildren> = ({ children }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  if (!isLoggedIn) return <Navigate to={'/login'} />;

  return children;
};

export default ProtectedRoutes;
