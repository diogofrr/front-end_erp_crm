import { LogOut } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

import { clearSession } from '@/lib/session';

import { useSession } from '@/hooks/auth/use-session';

import '@/styles/(protected)/dashboard/user-profile/style.css';

const UserProfile = () => {
  const { session } = useSession();

  return (
    <div className="user-profile">
      <Avatar className="avatar">
        <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
        <AvatarFallback>{session?.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="user-info">
        <p className="user-name">{session?.name}</p>
        <p className="user-email">{session?.email}</p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="logout-btn"
        onClick={async () => {
          await clearSession();
        }}
      >
        <LogOut className="logout-icon" />
      </Button>
    </div>
  );
};

export default UserProfile;
