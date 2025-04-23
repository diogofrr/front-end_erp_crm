'use client';

import { ChevronDown, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import HeaderSkeleton from './header-skeleton';

import { useSidebar } from '@/hooks/(protected)/use-sidebar';
import { useSession } from '@/hooks/auth/use-session';

import '@/styles/(protected)/dashboard/header/style.css';

const Header = () => {
  const { handleOpenSidebar } = useSidebar();
  const { session } = useSession();

  return (
    <header className="header-wrapper">
      <Button
        variant="ghost"
        size="icon"
        className="header-menu-button"
        onClick={handleOpenSidebar}
        aria-label="Menu"
      >
        <Menu className="header-menu-icon" />
      </Button>

      <div className="header-user-container">
        {session ? (
          <div className="header-user-info">
            <Avatar className="header-avatar">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="Avatar"
              />
              <AvatarFallback>{session.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="header-username">{session.name}</span>
            <ChevronDown className="header-chevron" />
          </div>
        ) : (
          <HeaderSkeleton />
        )}
      </div>
    </header>
  );
};

export default Header;
