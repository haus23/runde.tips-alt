import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useAuth from '@/common/hooks/use-auth';

import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '@/api/firebase/auth';
import { ViewContainer } from '@/lib/ui/layout/view-container/ViewContainer';
import { Button } from '@/lib/ui/components/button/Button';

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
    <ViewContainer title="Anmeldung">
      <Button primary onClick={logIn}>
        Log In
      </Button>
    </ViewContainer>
  );
};

export default LogIn;
