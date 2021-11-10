import { forwardRef, ComponentPropsWithoutRef } from 'react';

type HTMLInputProps = Omit<ComponentPropsWithoutRef<'input'>, 'onChange'>;

type TextFieldProps = HTMLInputProps & {
  label: string;
  onChange?: (val: string) => void;
};

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, name, onChange, readOnly, ...props }: TextFieldProps, ref) => {
    return (
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        <span className="block mb-2">{label}</span>
        <input
          ref={ref}
          type="text"
          name={name}
          autoComplete={name}
          {...props}
          disabled={readOnly}
          onChange={({ target: { value } }: InputChangeEvent) =>
            onChange && onChange(value)
          }
          className="block w-full shadow-sm rounded-md sm:text-sm
          border-gray-300 dark:border-gray-700
          text-gray-900 dark:text-gray-100 dark:bg-gray-800
          disabled:text-gray-500 disabled:bg-gray-200
          dark:disabled:text-gray-200 dark:disabled:bg-gray-500
          dark:mt-1 dark:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </label>
    );
  }
);

export default TextField;
