import { SidebarLink } from '@/backyard/components/sidebar/sidebar-link/SidebarLink';
import { HomeIcon } from '@heroicons/react/outline';
import { Brand } from '@/lib/ui/layout/brand/Brand';

export const Sidebar = () => (
  <>
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="px-4 -mt-1">
            <Brand textAlwaysVisible={true} />
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            <SidebarLink to="." icon={HomeIcon}>
              Dashboard
            </SidebarLink>
            <SidebarLink to="spiele" icon={HomeIcon}>
              Spiele
            </SidebarLink>
          </nav>
        </div>
      </div>
    </div>
  </>
);
