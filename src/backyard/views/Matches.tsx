import useTeams from '@/api/hooks/use-teams';
import AutocompleteCombobox from '@/common/components/form/AutocompleteCombobox';
import Team from '@/api/model/team';
import { Button } from '@/lib/ui/atoms/button/Button';
import { useState } from 'react';
import { ModalDialog } from '@/lib/ui/components/modal-dialog/ModalDialog';
import { TeamForm } from '@/lib/ui/forms/team-form/TeamForm';

function Matches() {
  const { teams, add } = useTeams();
  const [teamDialogOpen, setTeamDialogOpen] = useState(false);

  const filterFn = (t: Team, search: string | undefined) => {
    return `${t.name} ${t.shortName}`
      .toLowerCase()
      .includes(search?.toLowerCase() || '');
  };

  const handleSave = async (team: Team) => {
    await add(team);
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
      <Button onClick={() => setTeamDialogOpen(true)}>Add Team</Button>
      <ModalDialog
        open={teamDialogOpen}
        onClose={() => setTeamDialogOpen(false)}
      >
        <TeamForm
          onSave={async (team) => {
            setTeamDialogOpen(false);
            await handleSave(team);
          }}
          onCancel={() => setTeamDialogOpen(false)}
          validateId={(id) => !teams.some((t) => t.id === id)}
        />
      </ModalDialog>
    </div>
  );
}

export default Matches;
