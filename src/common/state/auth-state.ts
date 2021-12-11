import { atom } from 'recoil';

type UserProfile = {
  email: string;
  name: string;
  imageUrl: string;
};

type AuthState = {
  isAuthenticating: boolean;
  authenticated: boolean;
  user: UserProfile | null;
};

const authState = atom<AuthState>({
  key: 'authState',
  default: {
    isAuthenticating: true,
    authenticated: false,
    user: null,
  },
});

export default authState;
