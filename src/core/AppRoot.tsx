import { ReactNode, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import SplashScreen from '@/core/components/SplashScreen';

type AppRootProps = {
  children: ReactNode;
};

function AppRoot({ children }: AppRootProps) {
  return (
    <RecoilRoot>
      <Suspense fallback={<SplashScreen />}>
        <BrowserRouter>{children}</BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
}

export default AppRoot;
