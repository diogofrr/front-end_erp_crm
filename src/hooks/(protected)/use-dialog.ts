import { useState } from 'react';

export function useDialog() {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return {
    open,
    handleOpenDialog,
    handleCloseDialog,
  };
}
