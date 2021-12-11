import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

type AppRootProps = {
  children: ReactNode;
};

function AppRoot({ children }: AppRootProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default AppRoot;
