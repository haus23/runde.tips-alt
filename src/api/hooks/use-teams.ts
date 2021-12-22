import useCollection from '@/api/hooks/common/use-collection';
import Team from '@/api/model/team';

const useTeams = () => {
  const { data: teams, ...actions } = useCollection<Team>('teams');

  return {
    teams,
    ...actions,
  };
};

export default useTeams;
