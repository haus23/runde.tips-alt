import { ReactNode, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import SplashScreen from '@/core/components/SplashScreen';

type AppRootProps = {
  children: ReactNode;
};

function AppRoot({ children }: AppRootProps) {
  return (
    <RecoilRoot>
      <Suspense fallback={<SplashScreen />}>{children}</Suspense>
    </RecoilRoot>
  );
}

export default AppRoot;
