import { orderBy } from 'firebase/firestore';
import { useRef } from 'react';
import { Championship } from '../model';
import { useCollection } from './common';

const useChampionships = () => {
  const constraints = useRef([orderBy('nr', 'desc')]);

  const { data: championships } = useCollection<Championship>(
    'championships',
    constraints.current
  );

  return { championships };
};

export default useChampionships;
