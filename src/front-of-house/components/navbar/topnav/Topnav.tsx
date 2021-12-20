import { Brand } from '@/lib/ui/layout/brand/Brand';
import { TopnavLink } from '../topnav-link/TopnavLink';
import { TopnavProfile } from '@/front-of-house/components/navbar/topnav-profile/TopnavProfile';
import UserProfile from '@/model/UserProfile';

export type TopnavProps = {
  user: UserProfile | null;
};

export const Topnav = ({ user }: TopnavProps) => {
  return (
    <>
      <div className="flex">
        <Brand />
        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
          <TopnavLink to="/">Tabelle</TopnavLink>
          <TopnavLink to="/spieler">Spieler</TopnavLink>
          <TopnavLink to="/spiele">Spiele</TopnavLink>
        </div>
      </div>
      <div className="hidden sm:flex items-center">
        {user === null ? (
          <div className="flex h-16">
            <TopnavLink to="/login">Log In</TopnavLink>
          </div>
        ) : (
          <TopnavProfile user={user} />
        )}
      </div>
    </>
  );
};
