import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useAuth from '@/common/hooks/use-auth';

type Props = {
  children: ReactNode;
};

export default ({ children }: Props) => {
  let { authenticated } = useAuth();
  let location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};
