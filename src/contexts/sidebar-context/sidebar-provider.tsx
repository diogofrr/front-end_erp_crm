'use client';

import { useReducer } from 'react';

import type { SidebarProviderProps } from '@/types/contexts/sidebar-context';

import SidebarContext from './sidebar-context';
import actions from './actions';
import reducer from './reducer';
import initialState from './data';

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeSidebar = (state: boolean) => {
    dispatch({
      type: actions.CHANGE_SIDEBAR,
      payload: state,
    });
  };

  return (
    <SidebarContext.Provider value={{ state, changeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
