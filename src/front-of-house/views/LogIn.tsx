import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '@/api/firebase/auth';

const LogIn = () => {
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
