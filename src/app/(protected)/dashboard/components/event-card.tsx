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

interface EventCardProps {
  id: number;
  name: string;
  date: string;
  status: string;
}

const EventCard = ({ id, name, date, status }: EventCardProps) => {
  return (
    <Card
      key={id}
      className="overflow-hidden border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <CardHeader className="pb-3 pt-4 px-5">
        <div className="flex justify-between items-start">
          <div>
            <Badge
              className={`mb-2 ${status === 'Em andamento' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-blue-100 text-blue-700 hover:bg-blue-100'}`}
            >
              {status}
            </Badge>
            <CardTitle className="text-lg font-semibold">{name}</CardTitle>
            <p className="text-sm text-gray-500 mt-1">{date}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-8 w-8 text-gray-400 hover:text-gray-600"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pb-3 px-5">
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Total de ingressos:</span>
            <span className="font-medium">100</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Total de pessoas:</span>
            <span className="font-medium">80</span>
          </div>
          <Separator className="my-3 bg-gray-100" />
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Arrecadado:</span>
            <span className="font-semibold text-red-600">R$ 1.500,00</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 pb-5 px-5">
        <Button className="w-full bg-red-600 hover:bg-red-700 rounded-lg h-10 font-medium">
          Ver detalhes
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
