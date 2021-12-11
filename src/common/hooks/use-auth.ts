import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import auth from '@/api/firebase/auth';
import authStateAtom from '@/common/state/auth-state';

import useWaitForAuthentication from './use-wait-for-authentication';

function useAuth() {
  useWaitForAuthentication();
  const [authState, setAuthState] = useRecoilState(authStateAtom);

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setAuthState({
        authenticated: user !== null,
        user: user
          ? {
              email: user.email!,
              name: user.displayName || '',
              imageUrl: user.photoURL || '',
            }
          : null,
      });
    });
  }, []);
  return { ...authState };
}

export default useAuth;
