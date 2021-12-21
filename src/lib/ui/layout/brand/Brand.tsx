import { Logo } from '../logo/Logo';
import { Link } from 'react-router-dom';
import classNames from '@/lib/ui/helper/class-names';

export type BrandProps = {
  textAlwaysVisible?: boolean;
};

export const Brand = ({ textAlwaysVisible = false }: BrandProps) => (
  <div className="flex">
    <Link to="/" className="flex items-center">
      <Logo className="h-8" />
      <h1
        className={classNames(
          'ml-2 text-xl font-semibold',
          textAlwaysVisible ? 'block' : 'hidden lg:block'
        )}
      >
        runde.tips
      </h1>
    </Link>
  </div>
);
