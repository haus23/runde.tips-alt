import { useEffect, useMemo, useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';

import db from '@/api/firebase/db';

import FirestoreDoc from '@/api/model/common/firestore-doc';
import converter from '@/api/model/common/converter';

const useCollection = <T extends FirestoreDoc>(path: string) => {
  const [data, setData] = useState([] as T[]);

  const q = useMemo(
    () => query<T>(collection(db, path).withConverter(converter<T>())),
    []
  );

  useEffect(() => {
    onSnapshot(q, (qs) => setData(qs.docs.map((doc) => doc.data())));
  }, [setData, q]);

  return {
    data,
  };
};

export default useCollection;
