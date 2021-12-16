import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import classNames from '../../helper/class-names';

export type TextFieldProps = ComponentPropsWithoutRef<'input'> & {
  label?: string;
  labelHidden?: boolean;
  errorMsg?: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label = 'Label', labelHidden = false, errorMsg, className, ...props },
    ref
  ) => {
    const hasError = typeof errorMsg !== 'undefined';

    return (
      <div className={className}>
        <label className="block">
          <span
            style={{ display: labelHidden ? 'none' : undefined }}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </span>
          <div className="mt-1 relative">
            <input
              type="text"
              ref={ref}
              {...props}
              className={classNames(
                'shadow-sm block w-full sm:text-sm rounded-md',
                hasError
                  ? 'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
              )}
            />
            {hasError && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        </label>
        {errorMsg && <p className="mt-2 text-sm text-red-600">{errorMsg}</p>}
      </div>
    );
  }
);
TextField.displayName = 'TextField';
