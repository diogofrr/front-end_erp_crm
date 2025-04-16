import EventTabs from './components/event-tabs';

export default function DashboardPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">
          Painel de Eventos
        </h1>
        <p className="text-gray-500">
          Gerencie e acompanhe todos os seus eventos em um só lugar
        </p>
      </div>

      <EventTabs />
    </>
  );
}
