import { ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import '@/styles/(protected)/dashboard/event-card/style.css';

import type { EventCardProps } from '@/types/(protected)/dashboard/event-card';

const EventCard = ({ id, name, date, status }: EventCardProps) => {
  const badgeClass =
    status === 'Em andamento'
      ? 'badge-status-in-progress'
      : 'badge-status-default';

  return (
    <Card key={id} className="event-card">
      <CardHeader className="event-card-header">
        <div className="flex justify-between items-start">
          <div>
            <Badge className={`mb-2 ${badgeClass}`}>{status}</Badge>
            <CardTitle className="event-card-title">{name}</CardTitle>
            <p className="event-card-date">{date}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="event-card-icon-button"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="event-card-content">
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span className="event-card-info-label">Total de ingressos:</span>
            <span className="event-card-info-value">100</span>
          </div>
          <div className="flex justify-between">
            <span className="event-card-info-label">Total de pessoas:</span>
            <span className="event-card-info-value">80</span>
          </div>
          <Separator className="event-card-separator" />
          <div className="flex justify-between items-center">
            <span className="event-card-income">Arrecadado:</span>
            <span className="event-card-income-value">R$ 1.500,00</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="event-card-footer">
        <Button className="event-card-button">Ver detalhes</Button>
      </CardFooter>
    </Card>
  );
};
export default EventCard;
