import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useAuth from '@/common/hooks/use-auth';

import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '@/api/firebase/auth';

const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { authenticated } = useAuth();

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (authenticated) {
      navigate(from, { replace: true });
    }
  }, [authenticated]);

  const logIn = async () => {
    await signInWithEmailAndPassword(
      auth,
      'micha@somewhere.com',
      'yourSecretHere'
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Log In</h2>
      <button onClick={logIn}>Log In</button>
    </div>
  );
};

export default LogIn;
