import Provider from './provider';
import Header from './components/header';
import Sidebar from './components/sidebar';

import { LayoutProps } from '@/types/root';

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <Provider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto p-6">{children}</main>
        </div>
      </div>
    </Provider>
  );
}
