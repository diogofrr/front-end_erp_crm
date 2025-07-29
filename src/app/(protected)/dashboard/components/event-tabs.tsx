'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmptyEvents from './empty-events';
import EventCard from './event-card';

import { Skeleton } from '@/components/ui/skeleton';
import { useEvents } from '@/hooks/protected/dashboard/use-events';
import '@/styles/protected/dashboard/event-tabs/style.css';
import { useState } from 'react';

const EventTabs = () => {
  const [selectedTab, setSelectedTab] = useState('em-andamento');
  const { events, ongoingBadges, finishedBadges, isLoading } = useEvents();

  const ongoing = events.filter((e) => ongoingBadges.includes(e.status.color));

  const finished = events.filter((e) =>
    finishedBadges.includes(e.status.color)
  );

  console.log('ongoing', ongoing);
  console.log('finished', finished);

  const currentCount =
    selectedTab === 'em-andamento' ? ongoing.length : finished.length;

  if (isLoading) {
    return (
      <Skeleton
        className="h-[70dvh] w-full"
        data-testid="event-tabs-skeleton"
      />
    );
  }

  return (
    <div className="tabs-wrapper">
      <Tabs
        defaultValue="em-andamento"
        className="tabs-container"
        onValueChange={setSelectedTab}
      >
        <div className="tabs-header">
          <TabsList className="tabs-list">
            <TabsTrigger
              value="em-andamento"
              className="tabs-trigger"
              data-testid="event-tabs-trigger-ongoing"
            >
              Em andamento
            </TabsTrigger>
            <TabsTrigger
              value="finalizados"
              className="tabs-trigger"
              data-testid="event-tabs-trigger-finished"
            >
              Finalizados
            </TabsTrigger>
          </TabsList>

          <div className="tabs-event-counter">
            Mostrando{' '}
            <span className="tabs-event-counter-strong">{currentCount}</span>{' '}
            evento(s)
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
