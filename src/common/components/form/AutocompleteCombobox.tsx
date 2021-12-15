import { useCombobox } from 'downshift';
import { useEffect, useState } from 'react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import classNames from '@/common/lib/class-names';

type AutocompleteCombobox<T> = {
  label: string;
  labelHidden?: boolean;
  items: T[];
  filter: (item: T, search: string | undefined) => boolean;
  itemToString: (item: T | null) => string;
  menuItemText: (item: T) => string;
  menuItemKey: (item: T) => string;
};

function AutocompleteCombobox<T>({
  label,
  labelHidden = false,
  items,
  filter,
  itemToString,
  menuItemText,
  menuItemKey,
}: AutocompleteCombobox<T>) {
  const [inputItems, setInputItems] = useState(items);

  useEffect(() => {
    setInputItems(items);
  }, [items]);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    selectedItem,
  } = useCombobox({
    items: inputItems,
    itemToString,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(items.filter((item) => filter(item, inputValue)));
    },
  });
  return (
    <div className="relative">
      <label
        className={classNames(labelHidden ? 'hidden' : '')}
        {...getLabelProps()}
      >
        {label}
      </label>
      <div
        className="mt-1 relative rounded-md shadow-sm"
        {...getComboboxProps()}
      >
        <input
          type="text"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
          {...getInputProps()}
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center"
          type="button"
          {...getToggleButtonProps()}
          aria-label="toggle menu"
        >
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
      </div>
      <div {...getMenuProps()}>
        {isOpen && inputItems.length !== 0 && (
          <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {inputItems.map((item, index) => (
              <li
                className={classNames(
                  highlightedIndex === index
                    ? 'text-white bg-indigo-600'
                    : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-8 pr-4'
                )}
                key={menuItemKey(item)}
                {...getItemProps({ item, index })}
              >
                <>
                  <span
                    className={classNames(
                      selectedItem === item ? 'font-semibold' : 'font-normal',
                      'block truncate'
                    )}
                  >
                    {menuItemText(item)}
                  </span>

                  {selectedItem === item ? (
                    <span
                      className={classNames(
                        highlightedIndex === index
                          ? 'text-white'
                          : 'text-indigo-600',
                        'absolute inset-y-0 left-0 flex items-center pl-1.5'
                      )}
                    >
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AutocompleteCombobox;
