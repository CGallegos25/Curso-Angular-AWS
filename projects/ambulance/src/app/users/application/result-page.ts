import { User, UserNode } from '../domain/user';

export interface ResultPage {
  records: User | User[];
  totalRecords: number;
}

export interface ResultPageNode {
  total: number,
  usuarios: UserNode | UserNode[];
}
