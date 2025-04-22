import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { clearSession } from '@/lib/session';
import { useSession } from '@/hooks/auth/use-session';

const UserProfile = () => {
  const { session } = useSession();

  return (
    <div className="flex items-center gap-3">
      <Avatar className="size-9">
        <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
        <AvatarFallback>{session?.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="text-sm font-medium">{session?.name}</p>
        <p className="text-xs text-gray-500">{session?.email}</p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full size-8 cursor-pointer"
        onClick={async () => {
          await clearSession();
        }}
      >
        <LogOut className="h-4 w-4 text-gray-500" />
      </Button>
    </div>
  );
};

export default UserProfile;
