import {
  FirestoreDataConverter,
  WithFieldValue,
  DocumentData,
} from 'firebase/firestore';
import FirestoreDoc from '@/api/model/common/firestore-doc';

const converter = <T extends FirestoreDoc>(): FirestoreDataConverter<T> => ({
  toFirestore: (modelObject: WithFieldValue<T>): DocumentData => {
    const { id, ...doc } = modelObject;
    return doc;
  },
  fromFirestore: (snapshot) =>
    ({
      id: snapshot.id,
      ...snapshot.data(),
    } as T),
});

export default converter;
