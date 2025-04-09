'use client';

import Link from 'next/link';

function Anchor({
  to,
  target,
  elementRef,
  handleClick,
  isRounded,
  children,
}: any) {
  return (
    <Link
      onClick={handleClick}
      ref={elementRef}
      href={to}
      target={target}
      onMouseDown={(event) => event.preventDefault()}
      className={`block w-full border border-transparent uppercase shadow hover:bg-black hover:text-white ${isRounded ? 'p-1' : 'px-2 py-1'} flex items-center justify-center text-center transition-all hover:bg-black hover:text-white focus:z-50 focus:border-black focus:bg-white focus:ring-0 focus:outline-0`}
    >
      {children}
    </Link>
  );
}

export default Anchor;
