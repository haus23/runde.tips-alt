import FirestoreDoc from '@/api/model/common/firestore-doc';

export default interface Championship extends FirestoreDoc {
  title: string;
  nr: number;
  published: boolean;
  completed: boolean;
}
