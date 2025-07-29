'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useSession } from '@/hooks/auth/use-session';
import { type LogoutDialogProps } from '@/types/protected/dashboard/logout-dialog';

const LogoutDialog = ({
  open,
  handleCloseDialog,
  handleOpenDialog,
}: LogoutDialogProps) => {
  const { handleLogout } = useSession();

  return (
    <Dialog open={open} onOpenChange={handleOpenDialog}>
      <DialogContent className="border-gray-100">
        <DialogHeader>
          <DialogTitle>Deseja sair?</DialogTitle>
          <DialogDescription>
            Ao confirmar, você será desconectado do sistema.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={handleCloseDialog}
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button onClick={handleLogout} className="cursor-pointer">
            Sair
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { LogoutDialog }; 