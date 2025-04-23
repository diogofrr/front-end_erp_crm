import { useFetchEvents } from './use-fetch-events';

export function useEvents() {
  const { data: events = [], refetch, isLoading, error } = useFetchEvents();

  const ongoingBadges = ['badge-status-in-progress', 'badge-status-incoming'];
  const finishedBadges = ['badge-status-finished', 'badge-status-canceled'];

  return {
    events,
    refetch,
    isLoading,
    error,
    ongoingBadges,
    finishedBadges,
  };
}
