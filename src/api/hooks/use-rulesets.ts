import useCollection from '@/api/hooks/common/use-collection';
import Ruleset from '@/api/model/ruleset';

const useRulesets = () => {
  const { data: rulesets } = useCollection<Ruleset>('rulesets');

  return {
    rulesets,
  };
};

export default useRulesets;
