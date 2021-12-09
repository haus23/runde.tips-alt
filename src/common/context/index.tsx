import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { SplashScreen } from '../components';

type AppProviderProps = {
  children: ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <RecoilRoot>
      <Suspense fallback={<SplashScreen />}>
        <BrowserRouter>{children}</BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
}
