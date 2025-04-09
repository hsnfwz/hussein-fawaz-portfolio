'use client';

function Button({
  elementRef,
  handleClick,
  isDisabled,
  isRound,
  children,
}: any) {
  return (
    <button
      ref={elementRef}
      type="button"
      disabled={isDisabled}
      onClick={handleClick}
      onMouseDown={(event) => event.preventDefault()}
      className={`flex cursor-pointer items-center justify-center gap-2 self-start rounded-full border border-transparent bg-white text-black hover:bg-black hover:text-white ${isRound ? 'p-1' : 'px-2 py-1'} text-center transition-all focus:z-50 focus:border-black focus:ring-0 focus:outline-0 disabled:pointer-events-none disabled:opacity-50`}
    >
      {children}
    </button>
  );
}

export default Button;
