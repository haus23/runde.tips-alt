import { onAuthStateChanged } from 'firebase/auth';
import { selector } from 'recoil';
import { auth } from '../firebase';
import authState from './auth-state';

const authQuery = selector({
  key: 'auth',
  get: ({ get }) => {
    console.log('Subscribing auth in query');
    return new Promise((resolv) => {
      onAuthStateChanged(
        auth,
        (user) => {
          console.log(get(authState));
          console.log(user);
          resolv(true);
        } /*,
        (error) => {
          console.log(error);
        },
        () => {
          console.log('Completed');
        }*/
      );
    });
  },
});

export default authQuery;
