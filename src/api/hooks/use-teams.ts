import { useEffect, useMemo, useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';

import db from '@/api/firebase/db';
import Team from '@/api/model/Team';
import converter from '@/api/model/common/converter';

const useTeams = () => {
  const [teams, setTeams] = useState([] as Team[]);

  const q = useMemo(
    () => query<Team>(collection(db, 'teams').withConverter(converter<Team>())),
    []
  );

  useEffect(() => {
    onSnapshot(q, (qs) => setTeams(qs.docs.map((doc) => doc.data())));
  }, [setTeams, q]);

  return {
    teams,
  };
};

export default useTeams;
