import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useAuth from '@/common/hooks/use-auth';

type Props = {
  children: ReactNode;
};

const RequireAuth = ({ children }: Props) => {
  const { authenticated } = useAuth();
  const location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
};

export default RequireAuth;
