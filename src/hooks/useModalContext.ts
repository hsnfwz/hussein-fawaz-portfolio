import { useContext } from 'react';
import { ModalContext } from '@/contexts/ModalContextProvider';

function useModalContext() {
  const context = useContext(ModalContext);
  if (!context)
    throw Error(
      'useModalContext can only be used inside an ModalContextProvider'
    );
  return context;
}

export default useModalContext;
