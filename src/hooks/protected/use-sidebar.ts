import useSidebarContext from './use-sidebar-context';

const useSidebar = () => {
  const { changeSidebar, state } = useSidebarContext();

  const handleCloseSidebar = () => {
    changeSidebar(false);
  };

  const handleOpenSidebar = () => {
    changeSidebar(true);
  };

  return {
    ...state,
    handleCloseSidebar,
    handleOpenSidebar,
  };
};

export { useSidebar };
