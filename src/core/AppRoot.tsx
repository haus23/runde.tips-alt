import { ReactNode } from 'react';

type AppRootProps = {
  children: ReactNode;
};

function AppRoot({ children }: AppRootProps) {
  return <>{children}</>;
}

export default AppRoot;
