import useTeams from '@/api/hooks/use-teams';
import AutocompleteCombobox from '@/common/components/form/AutocompleteCombobox';
import Team from '@/api/model/Team';

function Matches() {
  const { teams } = useTeams();

  const filterFn = (t: Team, search: string | undefined) => {
    return `${t.name} ${t.shortName}`
      .toLowerCase()
      .includes(search?.toLowerCase() || '');
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Spiele</h2>
      <AutocompleteCombobox
        label="Heim-Mannschaft"
        items={teams}
        filter={filterFn}
        itemToString={(t) => t?.shortName || ''}
        menuItemText={(t) => t.name}
        menuItemKey={(t) => t.id || ''}
      />
    </div>
  );
}

export default Matches;
