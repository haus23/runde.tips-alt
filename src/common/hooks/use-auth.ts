import { useEffect, useState } from 'react';

function useAuth() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuth(true);
    }, 2000);
  }, []);
  return auth;
}

export default useAuth;
