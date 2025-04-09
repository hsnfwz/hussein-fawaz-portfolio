'use client';

import { createContext, useState } from 'react';

const ModalContext = createContext({});

function ModalContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [modal, setModal] = useState<{ type: string; item: any }>({
    type: '',
    item: null,
  });

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalContextProvider };
