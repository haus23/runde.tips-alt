import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children?: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }: ButtonProps, ref) => (
    <button ref={ref} {...props}>
      {children || 'Button'}
    </button>
  )
);
Button.displayName = 'Button';
