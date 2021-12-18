import classNames from '../../helper/class-names';
import { Logo } from '../logo/Logo';
import { Link } from 'react-router-dom';

export type BrandProps = {
  className?: string;
};

export const Brand = ({ className = '' }: BrandProps) => (
  <div className={classNames(className, 'flex items-center')}>
    <Link to="/" className="flex items-center">
      <Logo className="h-8" />
      <h1 className="hidden lg:block ml-2 text-xl font-semibold">runde.tips</h1>
    </Link>
  </div>
);
