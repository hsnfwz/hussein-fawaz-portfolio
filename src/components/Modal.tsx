'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import Button from '@/components/Button';
import useModalContext from '@/hooks/useModalContext';

function Modal({ children, isDisabled, show, handleClose }: any) {
  const { setModal } = useModalContext();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (show) {
      disableBodyScroll();

      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const firstElement: any = focusableElements && focusableElements[0];
      const lastElement: any = focusableElements && focusableElements[focusableElements.length - 1];

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
      setModal(null);
      enableBodyScroll();
    }
  }

  return (
    <div
      ref={modalRef}
      className={`fixed top-0 left-0 z-50 h-screen w-full overflow-y-auto bg-black/75 p-4 backdrop-blur-lg ${show ? 'block' : 'hidden'}`}
      onClick={handleModalClickOutside}
    >
      <div className="m-auto flex w-full max-w-[1024px] flex-col gap-4 rounded-lg bg-white p-4">
        <div className="flex justify-end">
          <Button
            isRound={true}
            isDisabled={isDisabled}
            handleClick={closeModal}
          >
            <X />
          </Button>
        </div>
        <div className="mx-auto flex h-full w-full flex-col items-center gap-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
