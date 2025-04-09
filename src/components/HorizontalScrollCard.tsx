'use client';

import { Info } from 'lucide-react';
import useModalContext from '@/hooks/useModalContext';
import Button from '@/components/Button';
import Anchor from '@/components/Anchor';

function HorizontalScrollCard({ item }: any) {
  const { setModal } = useModalContext();

  return (
    <div className="flex w-full snap-start flex-col gap-8">
      <a
        className="group relative top-0 left-0 mx-2 block w-[200px] border border-transparent focus:border focus:border-black focus:ring-0 focus:outline-none md:w-[800px]"
        href={item.website}
        target="_blank"
      >
        <picture>
          <source media="(min-width:768px)" srcSet={item.desktopImage} />
          <img
            src={item.mobileImage}
            alt={item.title}
            style={{ width: 'auto' }}
            className="w-full bg-white/50 object-cover object-center shadow backdrop-blur-lg"
          />
        </picture>
        <div className="absolute -top-2 -left-2 -z-10 h-4 w-4 border-t border-l border-black transition-all duration-300 group-hover:h-full group-hover:w-full"></div>
        <div className="absolute -top-2 -right-2 -z-10 h-4 w-4 border-t border-r border-black transition-all duration-300 group-hover:h-full group-hover:w-full"></div>
        <div className="absolute -bottom-2 -left-2 -z-10 h-4 w-4 border-b border-l border-black transition-all duration-300 group-hover:h-full group-hover:w-full"></div>
        <div className="absolute -right-2 -bottom-2 -z-10 h-4 w-4 border-r border-b border-black transition-all duration-300 group-hover:h-full group-hover:w-full"></div>
      </a>
      <div className="flex w-full gap-8">
        <Anchor to={item.githubClient} target="_blank">
          {item.githubServer ? 'Client Code' : 'Code'}
        </Anchor>
        {item.githubServer && (
          <Anchor to={item.githubServer} target="_blank">
            Server Code
          </Anchor>
        )}
        <Button
          isRound={true}
          handleClick={() => setModal({ type: 'ITEM_MODAL', item })}
        >
          <Info />
        </Button>
      </div>
    </div>
  );
}

export default HorizontalScrollCard;
