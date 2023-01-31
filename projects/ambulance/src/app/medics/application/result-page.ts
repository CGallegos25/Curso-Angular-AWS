import { Medic } from "../domain/medic";

export interface ResultPage {
  records: Medic[],
  totalRecords: number
}
