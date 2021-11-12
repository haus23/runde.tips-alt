import { FirestoreDoc } from '../firebase';

export interface Championship extends FirestoreDoc {
  title: string;
}
