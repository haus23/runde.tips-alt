import { selector } from 'recoil';
import auth from '@/api/firebase/auth';

const authQuery = selector<boolean>({
  key: 'authQuery',
  get: () =>
    new Promise<boolean>((resolve) => {
      const unsubscribe = auth.onAuthStateChanged(() => {
        resolve(true);
        unsubscribe();
      });
    }),
});

export default authQuery;
