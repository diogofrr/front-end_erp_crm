import {
  Search,
  Home,
  Calendar,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Clock,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Sidebar = () => {
  return (
    <div className="hidden w-72 flex-col bg-white border-r border-gray-100 shadow-sm md:flex">
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-xl font-semibold tracking-tight text-gray-900">
          Sistema <span className="text-red-600">CRM</span>
        </h1>
      </div>
      <div className="flex-1 overflow-auto py-4 px-3">
        <div className="mb-6 px-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Buscar..."
              className="w-full bg-gray-50 pl-9 py-2 text-sm border-gray-200 rounded-xl"
            />
          </div>
        </div>
        <div className="mb-2 px-3">
          <h2 className="text-xs font-medium uppercase tracking-wider text-gray-500">
            Menu Principal
          </h2>
        </div>
        <nav className="grid gap-1 px-2">
          <Button
            variant="ghost"
            className="justify-start gap-3 text-gray-600 hover:bg-gray-50 rounded-xl h-11"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="justify-start gap-3 text-red-600 font-medium hover:bg-red-50 rounded-xl h-11 bg-red-50/70"
          >
            <Calendar className="h-4 w-4" />
            Eventos
            <Badge className="ml-auto bg-red-100 text-red-600 hover:bg-red-100">
              8
            </Badge>
          </Button>
          <Button
            variant="ghost"
            className="justify-start gap-3 text-gray-600 hover:bg-gray-50 rounded-xl h-11"
          >
            <Users className="h-4 w-4" />
            Clientes
          </Button>
          <Button
            variant="ghost"
            className="justify-start gap-3 text-gray-600 hover:bg-gray-50 rounded-xl h-11"
          >
            <BarChart3 className="h-4 w-4" />
            Relatórios
          </Button>
          <Button
            variant="ghost"
            className="justify-start gap-3 text-gray-600 hover:bg-gray-50 rounded-xl h-11"
          >
            <Settings className="h-4 w-4" />
            Configurações
          </Button>
        </nav>

        <div className="mt-8 px-3">
          <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-full bg-red-100 p-2">
                <Clock className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Próximo evento</h3>
                <p className="text-xs text-gray-500">Em 3 dias</p>
              </div>
            </div>
            <h4 className="font-medium text-sm mb-1">Workshop de Marketing</h4>
            <Progress
              value={75}
              className="h-1.5 [&>div]:bg-red-500 bg-gray-200"
            />
            <div className="mt-3 flex justify-between text-xs text-gray-500">
              <span>75% vendido</span>
              <span>150 ingressos</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src="/placeholder.svg?height=36&width=36"
              alt="Avatar"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">Usuário Admin</p>
            <p className="text-xs text-gray-500">admin@empresa.com</p>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <LogOut className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
