import { ReactNode, Suspense } from 'react';
import { RecoilRoot } from 'recoil';

type AppRootProps = {
  children: ReactNode;
};

function AppRoot({ children }: AppRootProps) {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading ...</div>}>{children}</Suspense>
    </RecoilRoot>
  );
}

export default AppRoot;
