'use client';

import { useContext, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { ModalContext } from '@/contexts/ModalContextProvider';
import Button from '@/components/Button';

function Modal({ children, isDisabled, show, handleClose }: any) {
  const { setModal }: any = useContext(ModalContext);
  const modalRef = useRef(null);

  useEffect(() => {
    if (show) {
      disableBodyScroll();

      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      firstElement.focus();

      const handleTabKeyPress = (event: any) => {
        if (event.key === 'Tab') {
          if (
            lastElement.disabled &&
            document.activeElement?.nextElementSibling === lastElement
          ) {
            event.preventDefault();
            firstElement.focus();
          } else if (
            event.shiftKey &&
            document.activeElement === firstElement
          ) {
            event.preventDefault();
            lastElement.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
          ) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };

      const handleEscapeKeyPress = (event: any) => {
        if (event.key === 'Escape') {
          closeModal();
        }
      };

      modalRef.current?.addEventListener('keydown', handleTabKeyPress);
      document.addEventListener('keydown', handleEscapeKeyPress);

      return () => {
        modalRef.current?.removeEventListener('keydown', handleTabKeyPress);
        document.removeEventListener('keydown', handleEscapeKeyPress);
        enableBodyScroll();
      };
    }
  }, [show]);

  function enableBodyScroll() {
    const body = document.querySelector('body');
    body?.classList.add('overflow-auto');
    body?.classList.remove('overflow-hidden');
  }

  function disableBodyScroll() {
    const body = document.querySelector('body');
    body?.classList.add('overflow-hidden');
    body?.classList.remove('overflow-auto');
  }

  function handleModalClickOutside(event: any) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function closeModal() {
    if (!isDisabled) {
      if (handleClose) handleClose();
      setModal({ type: '', item: null });
      enableBodyScroll();
    }
  }

  return (
    <div
      ref={modalRef}
      className={`fixed top-0 left-0 z-50 h-screen w-full overflow-y-auto bg-black/75 p-4 backdrop-blur-lg ${show ? 'block' : 'hidden'}`}
      onClick={handleModalClickOutside}
    >
      <div className="m-auto flex w-full flex-col gap-4 rounded-lg bg-white p-4 max-w-[1024px]">
        <div className="flex justify-end">
          <Button
            isRound={true}
            isDisabled={isDisabled}
            handleClick={closeModal}
          >
            <X />
          </Button>
        </div>
        <div className="mx-auto flex h-full w-full flex-col gap-8 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
