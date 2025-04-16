import { Bell, ChevronDown, Filter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-white px-6 sticky top-0 z-10">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <a href="#" className="hover:text-red-600 text-gray-700">
          Dashboard
        </a>
        <span>/</span>
        <span className="text-red-600 font-medium">Eventos</span>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-gray-200 text-gray-700 rounded-lg"
        >
          <Filter className="h-3.5 w-3.5" />
          Filtrar
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5 text-gray-500" />
        </Button>
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
