import { useRecoilValue } from 'recoil';
import { championshipsQuery } from '../state';

const useCurrentChampionship = () => {
  const championships = useRecoilValue(championshipsQuery);
  return championships[0];
};

export default useCurrentChampionship;
