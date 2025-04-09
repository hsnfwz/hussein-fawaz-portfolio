'use client';

function HorizontalScrollCard({ children }: any) {
  return (
    <div className="flex w-full snap-start flex-col gap-8">{children}</div>
  );
}

export default HorizontalScrollCard;
