import { FormEvent, useState } from 'react';
import { useAuth, useDocTitle } from '~/common/hooks';
import { useNavigate } from 'react-router';
import { TextField } from '~/common/components/forms';
import { UserIcon } from '@heroicons/react/outline';

export default function Settings() {
  useDocTitle('Einstellungen');
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState(user?.name || '');
  const [imageUrl, setImageUrl] = useState(user?.imageUrl || '');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    updateUser({
      name: displayName,
      imageUrl,
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="space-y-8">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50">
              Einstellungen
            </h3>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <TextField label="Email" value={user?.email || ''} readOnly />
            </div>
            <div className="sm:col-span-4">
              <TextField
                label="Name"
                value={displayName}
                onChange={setDisplayName}
                placeholder="Angezeigter Name statt Email-Adresse"
              />
            </div>
            <div className="sm:col-span-6">
              <TextField
                label="Bild URL"
                value={imageUrl}
                onChange={setImageUrl}
                placeholder="HTTPS-Adresse deines Avatars"
              />
            </div>
            <div className="sm:col-span-6 flex justify-center">
              {imageUrl ? (
                <img className="h-10 w-10 rounded-full" src={imageUrl} />
              ) : (
                <UserIcon className="h-10 w-10 text-gray-500" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Speichern
          </button>
        </div>
      </div>
    </form>
  );
}
