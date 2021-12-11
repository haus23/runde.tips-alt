import { atom } from 'recoil';

type UserProfile = {
  email: string;
  name: string;
  imageUrl: string;
};

type AuthState = {
  authenticated: boolean;
  user: UserProfile | null;
};

const authState = atom<AuthState>({
  key: 'authState',
  default: {
    authenticated: false,
    user: null,
  },
});

export default authState;
