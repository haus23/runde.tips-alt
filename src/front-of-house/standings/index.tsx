import { useCurrentChampionship } from '~/api/hooks';
import { useDocTitle } from '~/common/hooks';

export default function Standings() {
  useDocTitle('Tabelle');
  const championship = useCurrentChampionship();

  return (
    <div>
      <h2>{championship.title} - Aktuelle Tabelle</h2>
    </div>
  );
}
