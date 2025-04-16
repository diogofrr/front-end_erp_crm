import { Calendar } from 'lucide-react';

const EmptyEvents = () => {
  return (
    <div className="rounded-xl border border-dashed p-10 text-center bg-white">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <Calendar className="h-6 w-6 text-gray-500" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">
        Nenhum evento finalizado
      </h3>
      <p className="text-gray-500 max-w-md mx-auto">
        Quando seus eventos forem concluídos, eles aparecerão aqui para você
        analisar os resultados.
      </p>
    </div>
  );
};

export default EmptyEvents;
