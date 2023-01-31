import { Driver } from "../domain/driver";

export interface ResultPage {
  records: Driver[],
  totalRecords: number
}
