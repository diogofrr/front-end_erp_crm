'use client';

import { Calendar, BarChart3, Settings, Clock, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

import UserProfile from './user-profile';
import ProfileSkeleton from './profile-skeleton';

import { useSession } from '@/hooks/auth/use-session';
import { useSidebar } from '@/hooks/(protected)/use-sidebar';

const Sidebar = () => {
  const { session } = useSession();
  const { isOpen, handleCloseSidebar } = useSidebar();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={handleCloseSidebar}
        />
      )}

      <div
        className={`
          fixed top-0 bottom-0 left-0 z-50 w-72 flex-col bg-white border-r border-gray-100 shadow-sm 
          transition-transform duration-300 ease-in-out
          lg:static lg:z-auto lg:flex lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex h-16 items-center border-b px-6 justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-gray-900">
            Sistema <span className="text-red-600">CRM</span>
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCloseSidebar}
            className="lg:hidden"
          >
            <X className="size-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-4 px-3">
          <div className="mb-2 px-3">
            <h2 className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Menu Principal
            </h2>
          </div>
          <nav className="grid gap-1 px-2">
            <Button
              variant="ghost"
              className="justify-start gap-3 text-red-600 font-medium hover:bg-red-50 rounded-xl h-11 bg-red-50/70"
            >
              <Calendar className="h-4 w-4" />
              Eventos
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
              <h4 className="font-medium text-sm mb-1">
                Workshop de Marketing
              </h4>
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
          {session ? <UserProfile /> : <ProfileSkeleton />}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
