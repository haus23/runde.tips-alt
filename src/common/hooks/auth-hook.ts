import { atom, useRecoilState } from 'recoil';

const authState = atom<{
  isAuthenticating: boolean;
  authenticated: boolean;
  user: {
    email: string | null;
  } | null;
}>({
  key: 'auth',
  default: {
    isAuthenticating: true,
    authenticated: true,
    user: null,
  },
});

const useAuth = () => {
  const [auth] = useRecoilState(authState);

  return { ...auth };
};

export default useAuth;
