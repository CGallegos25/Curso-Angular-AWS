import { User } from '../domain/user';

export interface ResultPage {
  records: User | User[];
  totalRecords: number;
}
