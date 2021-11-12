import {
  collection,
  getDocs,
  query,
  QueryConstraint,
} from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import { converter, db } from '~/api/firebase';

const useCollection = <T>(path: string, constraints: QueryConstraint[]) => {
  const [data, setData] = useState([] as T[]);

  const q = useMemo(() => {
    return query<T>(
      collection(db, path).withConverter(converter<T>()),
      ...constraints
    );
  }, [path, constraints]);

  useEffect(() => {
    (async () => {
      const qs = await getDocs<T>(q);
      setData(qs.docs.map((v) => v.data()));
    })();
  }, [q]);

  return { data };
};

export default useCollection;
