export interface Atmosferica {
  pagination: Pagination;
  results:    Result[];
}

export interface Pagination {
  pageSize: number;
  page:     number;
  total:    number;
}

export interface Result {
  _id:                   string;
  cityid:                string;
  validdateutc:          Validdateutc;
  winddirectioncardinal: string;
  probabilityofprecip:   string;
  relativehumidity:      string;
  name:                  string;
  "date-insert":         Date;
  longitude:             string;
  state:                 State;
  lastreporttime:        Lastreporttime;
  skydescriptionlong:    Skydescriptionlong;
  stateabbr:             Stateabbr;
  tempc:                 string;
  latitude:              string;
  iconcode:              string;
  windspeedkm:           string;
}

export enum Lastreporttime {
  The20170627T092449Z = "20170627T092449Z",
  The20170627T092450Z = "20170627T092450Z",
  The20170627T092451Z = "20170627T092451Z",
  The20170627T092452Z = "20170627T092452Z",
  The20170627T092453Z = "20170627T092453Z",
  The20170627T092500Z = "20170627T092500Z",
}

export enum Skydescriptionlong {
  MayormenteNublado = "Mayormente nublado",
  MayormenteSoleado = "Mayormente soleado",
  Nublado = "Nublado",
  ParcialmenteNublado = "Parcialmente nublado",
  Soleado = "Soleado",
  Tormentas = "Tormentas",
  TormentasDispersas = "Tormentas dispersas",
}

export enum State {
  Aguascalientes = "Aguascalientes",
  BajaCalifornia = "Baja California",
  BajaCaliforniaSur = "Baja California Sur",
  Campeche = "Campeche",
  Chihuahua = "Chihuahua",
  Coahuila = "Coahuila",
}

export enum Stateabbr {
  Agu = "AGU",
  Bcn = "BCN",
  Bcs = "BCS",
  Cam = "CAM",
  Chh = "CHH",
  Coa = "COA",
}

export enum Validdateutc {
  The20170627T130000Z = "20170627T130000Z",
  The20170627T140000Z = "20170627T140000Z",
}
