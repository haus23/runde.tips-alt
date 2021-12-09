import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { auth as firebaseAuth } from '~/api/firebase';
import { authState } from '~/api/state';

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  // Subscribe to firebase auth
  useEffect(() => {
    console.log('Subscribing auth in hook');
    onAuthStateChanged(firebaseAuth, (user) => {
      console.log('Hook user', user);
      setAuth({
        isAuthenticating: false,
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
  }, [setAuth]);

  const logIn = async (email: string, password: string): Promise<boolean> => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      return true;
    } catch {
      return false;
    }
  };

  const logOut = async () => {
    return signOut(firebaseAuth);
  };

  const updateUser = async ({
    name,
    imageUrl,
  }: {
    name: string;
    imageUrl: string;
  }) => {
    await updateProfile(firebaseAuth.currentUser!, {
      displayName: name,
      photoURL: imageUrl,
    });
    setAuth({
      isAuthenticating: false,
      authenticated: true,
      user: {
        email: firebaseAuth.currentUser?.email!,
        name,
        imageUrl,
      },
    });
  };

  return { ...auth, logIn, logOut, updateUser };
};

export default useAuth;
