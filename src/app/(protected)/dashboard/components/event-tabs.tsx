'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EventCard from './event-card';
import EmptyEvents from './empty-events';

import '@/styles/(protected)/dashboard/event-tabs/style.css';
import { useEvents } from '@/hooks/protected/dashboard/use-events';
import { Skeleton } from '@/components/ui/skeleton';

const EventTabs = () => {
  const { events, ongoingBadges, finishedBadges, isLoading } = useEvents();

  const ongoing = events.filter((e) => ongoingBadges.includes(e.status.color));

  const finished = events.filter((e) =>
    finishedBadges.includes(e.status.color)
  );

  if (isLoading) {
    return <Skeleton className="h-[70dvh] w-full" />;
  }

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
          {ongoing.length > 0 ? (
            <div className="tabs-grid">
              {ongoing.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  name={event.name}
                  date={event.date}
                  status={event.status}
                  price={event.price}
                  totalTickets={event.totalTickets}
                />
              ))}
            </div>
          ) : (
            <EmptyEvents />
          )}
        </TabsContent>

        <TabsContent value="finalizados" className="tabs-content">
          {finished.length > 0 ? (
            <div className="tabs-grid">
              {finished.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  name={event.name}
                  date={event.date}
                  status={event.status}
                  price={event.price}
                  totalTickets={event.totalTickets}
                />
              ))}
            </div>
          ) : (
            <EmptyEvents />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventTabs;
