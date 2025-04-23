import { LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LogoutDialog } from './logout-dialog';

import { useSession } from '@/hooks/auth/use-session';
import { useDialog } from '@/hooks/(protected)/use-dialog';

import '@/styles/(protected)/dashboard/user-profile/style.css';

const UserProfile = () => {
  const { session } = useSession();
  const { open, handleCloseDialog, handleOpenDialog } = useDialog();

  return (
    <div className="user-profile">
      <Avatar className="avatar">
        <AvatarImage alt="Avatar" />
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
        onClick={handleOpenDialog}
      >
        <LogOut className="logout-icon" />
      </Button>
      <LogoutDialog
        open={open}
        handleCloseDialog={handleCloseDialog}
        handleOpenDialog={handleOpenDialog}
      />
    </div>
  );
};

export default UserProfile;
