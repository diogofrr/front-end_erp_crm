import { LogOut } from 'lucide-react';

import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

import '@/styles/(protected)/dashboard/profile-skeleton/style.css';

const ProfileSkeleton = () => {
  return (
    <div className="profile-skeleton">
      <Skeleton className="profile-skeleton-avatar" />
      <div className="profile-skeleton-info">
        <Skeleton className="profile-skeleton-name" />
        <Skeleton className="profile-skeleton-username" />
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="profile-skeleton-logout-button"
        disabled
      >
        <LogOut className="profile-skeleton-logout-icon" />
      </Button>
    </div>
  );
};

export default ProfileSkeleton;
