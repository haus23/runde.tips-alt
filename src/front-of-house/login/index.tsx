import { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TextField } from '~/common/components/forms';
import { useAuth } from '~/common/hooks';

export default function LogIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const { authenticated, logIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (authenticated) {
      navigate('/');
    }
  }, [authenticated]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const resultOk = await logIn(email, password);
    if (resultOk) {
      navigate(from, { replace: true });
    } else {
      setPassword('');
      setErrorMsg('Email-Adresse und/oder Passwort nicht korrekt.');
    }
  };

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-gray-50">
            Anmeldung
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:bg-gray-900 py-8 px-4 border border-gray-300 dark:border-gray-600 shadow-md sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={setEmail}
                  required
                />
              </div>

              <div>
                <TextField
                  label="Passwort"
                  type="password"
                  name="password"
                  value={password}
                  onChange={setPassword}
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log in
                </button>
              </div>
              {errorMsg && (
                <div className="text-red-500 text-center">
                  <p>{errorMsg}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
