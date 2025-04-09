'use client';

import { createContext, useState, Dispatch, SetStateAction } from 'react';

const ModalContext = createContext<{
  modal: {
    type: string;
    item?: {
      website: string;
      githubClient: string;
      githubServer: string;
      mobileImage: string;
      desktopImage: string;
      title: string;
      description: string;
      tags: string[];
    };
  } | null;
  setModal: Dispatch<
    SetStateAction<{
      type: string;
      item?: {
        website: string;
        githubClient: string;
        githubServer: string;
        mobileImage: string;
        desktopImage: string;
        title: string;
        description: string;
        tags: string[];
      };
    } | null>
  >;
} | null>(null);

function ModalContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [modal, setModal] = useState<{
    type: string;
    item?: {
      website: string;
      githubClient: string;
      githubServer: string;
      mobileImage: string;
      desktopImage: string;
      title: string;
      description: string;
      tags: string[];
    };
  } | null>(null);

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
