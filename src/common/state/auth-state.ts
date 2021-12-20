import { atom } from 'recoil';
import UserProfile from '@/model/UserProfile';

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
