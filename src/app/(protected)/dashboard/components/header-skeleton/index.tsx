import { Skeleton } from '@/components/ui/skeleton';
import './style.css';

const HeaderSkeleton = () => {
  return (
    <div className="header-skeleton">
      <Skeleton className="header-skeleton-avatar" />
      <Skeleton className="header-skeleton-title" />
      <Skeleton className="header-skeleton-icon" />
    </div>
  );
};

export default HeaderSkeleton; 