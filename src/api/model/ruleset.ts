import FirestoreDoc from '@/api/model/common/firestore-doc';

export default interface Ruleset extends FirestoreDoc {
  title: string;
  description: string;
}
