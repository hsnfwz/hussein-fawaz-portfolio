'use client';

import { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Button from '@/components/Button';

function HorizontalScrollGrid({ children, to }: any) {
  const parentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex w-full flex-col gap-4 px-4">
      <div
        ref={parentRef}
        className="app_hide-scrollbar grid w-full snap-x snap-mandatory grid-flow-col justify-start gap-8 overflow-x-scroll overflow-y-hidden overscroll-x-contain py-4"
      >
        {children}
      </div>
      <div className="flex gap-2 self-end">
        <Button
          isRound={true}
          handleClick={() => {
            parentRef.current?.scrollBy({ left: -1, behavior: 'smooth' });
          }}
        >
          <ChevronLeft />
        </Button>
        <Button
          isRound={true}
          handleClick={() => {
            parentRef.current?.scrollBy({ left: 1, behavior: 'smooth' });
          }}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default HorizontalScrollGrid;
