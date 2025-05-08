import EventTabs from './components/event-tabs';
import '@/styles/protected/dashboard/style.css';

export default function DashboardPage() {
  return (
    <>
      <div className="dashboard-container">
        <h1 className="dashboard-title">Painel de Eventos</h1>
        <p className="dashboard-subtitle">
          Gerencie e acompanhe todos os seus eventos em um só lugar
        </p>
      </div>

      <EventTabs />
    </>
  );
}
