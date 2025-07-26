import { Calendar } from 'lucide-react';
import './style.css';

const EmptyEvents = () => {
  return (
    <div
      className="empty-events-container"
      data-testid="empty-events-container"
    >
      <div className="empty-events-icon-wrapper">
        <Calendar className="empty-events-icon" />
      </div>
      <h3 className="empty-events-title">Nenhum evento encontrado</h3>
      <p className="empty-events-description">
        Quando houver eventos cadastrados, eles aparecerão aqui para você
        analisar os resultados.
      </p>
    </div>
  );
};

export default EmptyEvents;
