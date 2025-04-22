'use client';

import { ChevronDown, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSidebar } from '@/hooks/(protected)/use-sidebar';

const Header = () => {
  const { handleOpenSidebar } = useSidebar();

  return (
    <header className="flex h-16 items-center gap-4 border-b bg-white px-6 sticky top-0 z-10">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={handleOpenSidebar}
        aria-label="Menu"
      >
        <Menu className="size-5" />
      </Button>

      <div className="ml-auto flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="/placeholder.svg?height=32&width=32"
              alt="Avatar"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Usuário</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
