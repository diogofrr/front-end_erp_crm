import { ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import '@/styles/protected/dashboard/event-card/style.css';

import type { EventCardProps } from '@/types/protected/dashboard/event-card';

const EventCard = ({
  id,
  name,
  date,
  status,
  totalTickets,
  price,
}: EventCardProps) => {
  return (
    <Card key={id} className="event-card">
      <CardHeader className="event-card-header">
        <div className="flex justify-between items-start">
          <div>
            <Badge className={`mb-2 ${status.color}`}>{status.text}</Badge>
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
            <span className="event-card-info-label">Ingressos vendidos:</span>
            <span className="event-card-info-value">
              {totalTickets} de {totalTickets}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="event-card-info-label">Preço do ingresso:</span>
            <span className="event-card-income-value">{price}</span>
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
