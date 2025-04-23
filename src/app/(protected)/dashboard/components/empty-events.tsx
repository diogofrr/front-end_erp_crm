import { Calendar } from 'lucide-react';

import '@/styles/(protected)/dashboard/empty-events/style.css';

const EmptyEvents = () => {
  return (
    <div className="empty-events-container">
      <div className="empty-events-icon-wrapper">
        <Calendar className="empty-events-icon" />
      </div>
      <h3 className="empty-events-title">Nenhum evento finalizado</h3>
      <p className="empty-events-description">
        Quando seus eventos forem concluídos, eles aparecerão aqui para você
        analisar os resultados.
      </p>
    </div>
  );
};

export default EmptyEvents;
