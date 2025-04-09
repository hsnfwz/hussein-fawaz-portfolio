'use client';

import { useRef, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
// import useIntersection from '@/hooks/useIntersection';
import Button from '@/components/Button';

function HorizontalScrollGrid({ children, to }: any) {
  const parentRef = useRef(null);
  const timerRef = useRef(null);
  // const [scrollLeft, setScrollLeft] = useState(0);

  return (
    <div className="flex w-full flex-col gap-4 px-4">
      <div
        ref={parentRef}
        className="app_hide-scrollbar grid w-full snap-x snap-mandatory scroll-px-4 grid-flow-col justify-start gap-8 overflow-x-scroll overflow-y-hidden overscroll-x-contain py-4"
        // onScroll={() => {
        //   clearTimeout(timerRef.current);
        //   timerRef.current = setTimeout(() => {
        //     if (parentRef.current) {
        //       setScrollLeft(parentRef.current.scrollLeft);
        //     }
        //   }, 100);
        // }}
      >
        {children}
      </div>
      <div className="flex gap-2 self-end">
        <Button
          isRound={true}
          // isDisabled={scrollLeft === 0}
          handleClick={() => {
            parentRef.current?.scrollBy({ left: -1, behavior: 'smooth' });
            // setScrollLeft(parentRef.current?.scrollLeft);
          }}
        >
          <ChevronLeft />
        </Button>
        <Button
          isRound={true}
          handleClick={() => {
            parentRef.current?.scrollBy({ left: 1, behavior: 'smooth' });
            // setScrollLeft(parentRef.current?.scrollLeft);
          }}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default HorizontalScrollGrid;
