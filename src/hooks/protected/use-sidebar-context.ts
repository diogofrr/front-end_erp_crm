'use client';

import { useContext } from 'react';

import SidebarContext from '@/contexts/sidebar-context/sidebar-context';

const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebarContext must be used within an SidebarProvider');
  }
  return context;
};

export default useSidebarContext;
