import { Transition } from '@headlessui/react';
import { Logo } from '../logo/Logo';

export type SplashScreenProps = {
  show?: boolean;
};

export const SplashScreen = ({ show = true }: SplashScreenProps) => {
  return (
    <Transition
      show={show}
      appear={true}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="
      absolute
      z-50
      text-gray-800
      bg-white
      w-screen
      h-screen
      flex flex-col
      items-center
      justify-center
    "
      >
        <div className="flex flex-col items-center gap-y-6 w-48 sm:w-64">
          <span className="text-4xl px-6 font-semibold">runde.tips</span>
          <Logo className="w-48 sm:w-64" />
        </div>
      </div>
    </Transition>
  );
};