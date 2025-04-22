import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

import { LogOut } from 'lucide-react';

const ProfileSkeleton = () => {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="size-9 rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-4 w-24 mb-1" />
        <Skeleton className="h-3 w-32" />
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full size-8 cursor-pointer"
        disabled
      >
        <LogOut className="h-4 w-4 text-gray-300" />
      </Button>
    </div>
  );
};

export default ProfileSkeleton;
