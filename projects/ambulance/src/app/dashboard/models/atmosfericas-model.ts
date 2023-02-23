import { Lastreporttime, Result, Skydescriptionlong, State, Stateabbr, Validdateutc } from "../domain/atmosferica";

export class AtmosfericasResultModel {

  static AtmosfericaP (obj: Result) {
    return new AtmosfericasResultModel(
      obj['relativehumidity'],
      obj['name'],

    )
  }

  constructor(
    public relativehumidity: string,
    public name: string,


  ) {}
}
