import { SidebarLink } from '@/backyard/components/sidebar/sidebar-link/SidebarLink';
import { HomeIcon, UsersIcon } from '@heroicons/react/outline';
import { Brand } from '@/lib/ui/layout/brand/Brand';
import UserProfile from '@/model/UserProfile';

export type SidebarProps = {
  user: UserProfile;
};

export const Sidebar = ({ user }: SidebarProps) => (
  <>
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="px-4 -mt-1">
            <Brand textAlwaysVisible={true} />
          </div>
          <nav className="mt-5 flex-1 px-2">
            <div className="space-y-1">
              <SidebarLink to="." end icon={HomeIcon}>
                Dashboard
              </SidebarLink>
              <SidebarLink to="turnier" icon={HomeIcon}>
                Turnier
              </SidebarLink>
              <SidebarLink to="spiele" icon={HomeIcon}>
                Spiele
              </SidebarLink>
              <SidebarLink to="tipps" icon={HomeIcon}>
                Tipps
              </SidebarLink>
            </div>
            <hr className="dark:border-gray-500 my-4" />
            <div className="space-y-1"></div>
            <SidebarLink to={'turnier'} icon={HomeIcon}>
              Turniere
            </SidebarLink>
            <SidebarLink to={'regeln'} icon={UsersIcon}>
              Regelwerke
            </SidebarLink>
            <SidebarLink to={'spieler'} icon={UsersIcon}>
              Spieler
            </SidebarLink>
            <SidebarLink to={'team'} icon={UsersIcon}>
              Mannschaften
            </SidebarLink>
            <SidebarLink to={'liga'} icon={HomeIcon}>
              Ligen
            </SidebarLink>
          </nav>
        </div>
        <div className="flex-shrink-0 flex bg-gray-700 p-4">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src={user.imageUrl}
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">{user.name}</p>
              <button className="block text-xs font-medium text-gray-300">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
