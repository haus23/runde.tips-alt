import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';
import classNames from '../../helper/class-names';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children?: ReactNode;
  primary?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, primary = false, ...props }: ButtonProps, ref) => (
    <button
      ref={ref}
      type="button"
      {...props}
      className={classNames(
        'inline-flex items-center px-4 py-2 border font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2',
        primary
          ? 'border-transparent text-sm shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
          : 'border-gray-300 shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500'
      )}
    >
      {children || 'Button'}
    </button>
  )
);
Button.displayName = 'Button';
