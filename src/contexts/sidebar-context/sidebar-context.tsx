'use client';

import { createContext } from 'react';

import type { SidebarContextType } from '@/types/contexts/sidebar-context';

const SidebarContext = createContext<SidebarContextType | null>(null);

export default SidebarContext;
