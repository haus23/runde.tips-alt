import {
  FirestoreDataConverter,
  getFirestore,
  PartialWithFieldValue,
} from 'firebase/firestore';
import app from './app';

export const db = getFirestore(app);

export interface FirestoreDoc {
  id?: string;
}

export const converter = <
  T extends FirestoreDoc
>(): FirestoreDataConverter<T> => ({
  toFirestore: (modelObject: PartialWithFieldValue<T>) => {
    const { id, ...doc } = modelObject;
    return doc;
  },
  fromFirestore: (snapshot, options) =>
    ({ id: snapshot.id, ...snapshot.data() } as T),
});
