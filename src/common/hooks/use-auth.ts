import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import authState from '../state/auth-state';

function useAuth() {
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    setTimeout(() => {
      setAuth({
        isAuthenticating: false,
        authenticated: true,
        user: null,
      });
    }, 2000);
  }, []);
  return auth;
}

export default useAuth;
