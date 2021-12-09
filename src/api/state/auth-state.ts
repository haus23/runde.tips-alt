import { atom } from 'recoil';

type UserProfile = {
  email: string;
  name: string;
  imageUrl: string;
};

const authState = atom<{
  isAuthenticating: boolean;
  authenticated: boolean;
  user: UserProfile | null;
}>({
  key: 'authState',
  default: {
    isAuthenticating: true,
    authenticated: false,
    user: null,
  },
});

export default authState;
