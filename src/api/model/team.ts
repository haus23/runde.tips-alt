import FirestoreDoc from '@/api/model/common/firestore-doc';

export default interface Team extends FirestoreDoc {
  name: string;
  shortName: string;
}
