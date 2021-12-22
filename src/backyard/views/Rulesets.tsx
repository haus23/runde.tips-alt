import useRulesets from '@/api/hooks/use-rulesets';
import { ViewContainer } from '@/lib/ui/layout/view-container/ViewContainer';
import { Button } from '@/lib/ui/atoms/button/Button';

export const Rulesets = () => {
  const { rulesets } = useRulesets();

  return (
    <ViewContainer title="Regelwerke">
      <div className="flex">
        <div className="flex-auto">
          {rulesets.length === 0 ? (
            <h3>Noch keine definiert!</h3>
          ) : (
            <table></table>
          )}
        </div>
        <div className="flex-initial -translate-y-16">
          <Button>Neues Regelwerk</Button>
        </div>
      </div>
    </ViewContainer>
  );
};
