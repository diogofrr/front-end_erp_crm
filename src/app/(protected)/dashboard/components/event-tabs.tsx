import { ArrowDown } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EventCard from './event-card';
import EmptyEvents from './empty-events';

import '@/styles/(protected)/dashboard/event-tabs/style.css';

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
    {
      id: 4,
      name: 'Feira de Gado',
      date: '27 Ago, 2024',
      status: 'Em breve',
    },
  ];

  return (
    <div className="tabs-wrapper">
      <Tabs defaultValue="em-andamento" className="tabs-container">
        <div className="tabs-header">
          <TabsList className="tabs-list">
            <TabsTrigger value="em-andamento" className="tabs-trigger">
              Em andamento
            </TabsTrigger>
            <TabsTrigger value="finalizados" className="tabs-trigger">
              Finalizados
            </TabsTrigger>
          </TabsList>

          <div className="tabs-event-counter">
            Mostrando{' '}
            <span className="tabs-event-counter-strong">{events.length}</span>{' '}
            eventos
          </div>
        </div>

        <TabsContent value="em-andamento" className="tabs-content">
          <div className="tabs-grid">
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

          <div className="tabs-load-more-wrapper">
            <button className="tabs-load-more-button">
              <span>Ver mais eventos</span>
              <ArrowDown size={16} />
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
