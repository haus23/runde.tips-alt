import useCollection from '@/api/hooks/common/use-collection';
import Team from '@/api/model/team';

const useTeams = () => {
  const { data: teams } = useCollection<Team>('teams');

  return {
    teams,
  };
};

export default useTeams;
