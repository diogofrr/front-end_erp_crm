import Header from './components/header/index';
import Sidebar from './components/sidebar/index';
import Provider from './provider';

import { LayoutProps } from '@/types/root';

import '@/styles/protected/dashboard/style.css';

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <Provider>
      <div className="dashboard-wrapper">
        <Sidebar />
        <div className="dashboard-content">
          <Header />
          <main className="dashboard-main">{children}</main>
        </div>
      </div>
    </Provider>
  );
}
