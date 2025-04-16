import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EventCard from './event-card';
import EmptyEvents from './empty-events';

const EventTabs = () => {
  const events = [
    {
      id: 1,
      name: 'Workshop de Marketing',
      date: '12 Jun, 2024',
      status: 'Em andamento',
    },
    {
      id: 2,
      name: 'Conferência Tech',
      date: '18 Jun, 2024',
      status: 'Em breve',
    },
    {
      id: 3,
      name: 'Feira de Negócios',
      date: '25 Jun, 2024',
      status: 'Em breve',
    },
  ];

  return (
    <div className="mx-auto">
      <Tabs defaultValue="em-andamento" className="w-full">
        <div className="flex items-center justify-between mb-6">
          <TabsList className="bg-white border rounded-lg p-1.5 shadow-sm min-w-[360px]">
            <TabsTrigger
              value="em-andamento"
              className="hover:cursor-pointer rounded-md px-4 py-3 text-sm font-medium data-[state=active]:bg-red-50 data-[state=active]:text-red-600 transition-all"
            >
              Em andamento
            </TabsTrigger>
            <TabsTrigger
              value="finalizados"
              className="hover:cursor-pointer rounded-md px-4 py-3 text-sm font-medium data-[state=active]:bg-red-50 data-[state=active]:text-red-600 transition-all"
            >
              Finalizados
            </TabsTrigger>
          </TabsList>

          <div className="text-sm text-gray-500">
            Mostrando{' '}
            <span className="font-medium text-gray-700">{events.length}</span>{' '}
            eventos
          </div>
        </div>

        <TabsContent value="em-andamento" className="mt-0 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                name={event.name}
                date={event.date}
                status={event.status}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="text-sm text-red-600 font-medium hover:text-red-700 flex items-center gap-2">
              <span>Ver mais eventos</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3.33334V12.6667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6667 8L8.00004 12.6667L3.33337 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </TabsContent>

        <TabsContent value="finalizados" className="mt-0">
          <EmptyEvents />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventTabs;
