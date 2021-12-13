import { Fragment, useState } from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { SelectorIcon, CheckIcon } from '@heroicons/react/solid';

import useTeams from '@/api/hooks/use-teams';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function Matches() {
  const { teams } = useTeams();
  const listBoxTeams = [
    { id: '', name: '', shortName: 'Auswählen ...' },
    ...teams,
  ];

  const [homeTeam, setHomeTeam] = useState(listBoxTeams[0]);

  console.log(teams);

  return (
    <div>
      <h2 className="text-xl font-semibold">Spiele</h2>
      <Listbox value={homeTeam} onChange={setHomeTeam}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              Heimmannschaft
            </Listbox.Label>
            <div className="mt-1 relative">
              <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span className="block truncate">{homeTeam.shortName}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {listBoxTeams.map((t) => (
                    <Listbox.Option
                      key={t.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-indigo-600' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-8 pr-4'
                        )
                      }
                      value={t}
                      disabled={t.id === ''}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {t.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 left-0 flex items-center pl-1.5'
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

export default Matches;
