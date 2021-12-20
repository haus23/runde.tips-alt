import UserProfile from '@/model/UserProfile';
import { SidenavLink } from '@/front-of-house/components/navbar/sidenav-link/SidenavLink';

export type SidenavProps = {
  user: UserProfile | null;
  onClose: () => void | undefined;
};

export const Sidenav = ({ user, onClose }: SidenavProps) => {
  return (
    <>
      <div onClick={onClose} className="pt-2 pb-3 space-y-1">
        <SidenavLink to="/">Tabelle</SidenavLink>
        <SidenavLink to="/spieler">Spieler</SidenavLink>
        <SidenavLink to="/spiele">Spiele</SidenavLink>
      </div>
      <div className="pt-4 pb-3 border-t border-gray-200">
        {user === null ? (
          <SidenavLink onClick={onClose} to="/login">
            Log In
          </SidenavLink>
        ) : (
          <>
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.imageUrl}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  {user.name}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {user.email}
                </div>
              </div>
            </div>
            <div onClick={onClose} className="mt-3 space-y-1">
              <SidenavLink to="/hinterhof">Hinterhof</SidenavLink>
              <SidenavLink to="/einstellungen">Einstellungen</SidenavLink>
              <SidenavLink to="/logout">Log Out</SidenavLink>
            </div>
          </>
        )}
      </div>
    </>
  );
};
