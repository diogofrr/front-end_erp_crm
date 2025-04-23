'use client';

import { Calendar, BarChart3, Settings, Clock, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

import UserProfile from './user-profile';
import ProfileSkeleton from './profile-skeleton';

import { useSession } from '@/hooks/auth/use-session';
import { useSidebar } from '@/hooks/(protected)/use-sidebar';

import '@/styles/(protected)/dashboard/sidebar/style.css';

const Sidebar = () => {
  const { session } = useSession();
  const { isOpen, handleCloseSidebar } = useSidebar();

  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={handleCloseSidebar} />
      )}

      <div
        className={`sidebar-container ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="sidebar-header">
          <h1 className="sidebar-title">
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
          <div className="sidebar-nav-section">
            <h2 className="sidebar-nav-heading">Menu Principal</h2>
          </div>
          <nav className="sidebar-nav">
            <Button variant="ghost" className="sidebar-btn-active">
              <Calendar className="h-4 w-4" />
              Eventos
            </Button>
            <Button variant="ghost" className="sidebar-btn-inactive" disabled>
              <BarChart3 className="h-4 w-4" />
              Relatórios
            </Button>
            <Button variant="ghost" className="sidebar-btn-inactive" disabled>
              <Settings className="h-4 w-4" />
              Configurações
            </Button>
          </nav>

          <div className="mt-8 px-3 hidden">
            <div className="sidebar-card">
              <div className="sidebar-card-header">
                <div className="sidebar-card-icon">
                  <Clock className="size-4 text-red-600" />
                </div>
                <div>
                  <h3 className="sidebar-card-title">Próximo evento</h3>
                  <p className="sidebar-card-subtitle">Em 3 dias</p>
                </div>
              </div>
              <h4 className="sidebar-card-event-title">
                Workshop de Marketing
              </h4>
              <Progress value={75} className="sidebar-progress" />
              <div className="sidebar-progress-footer">
                <span>75% vendido</span>
                <span>150 ingressos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-footer">
          {session ? <UserProfile /> : <ProfileSkeleton />}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
