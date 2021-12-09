import { selector } from 'recoil';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { Championship } from '../model';
import { converter, db } from '../firebase';

const championshipsQuery = selector({
  key: 'championships',
  get: async () => {
    console.log('Querying championships');
    const snapshot = await getDocs<Championship>(
      query(
        collection(db, 'championships').withConverter(
          converter<Championship>()
        ),
        orderBy('nr', 'desc'),
        where('published', '==', true)
      )
    );
    return snapshot.docs.map((doc) => doc.data());
  },
});

export default championshipsQuery;
