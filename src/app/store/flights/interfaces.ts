export interface FlightsState {
  workerId: string;
  flights: Flights;
  selectedFlight: Flight;
  time: number;
}

export interface Flight {
  num: string;
  from: string;
  to: string;
  from_date: string;
  to_date: string;
  plane: string;
  duration: number;
  from_gate: string;
  to_gate: string;
}

export type Flights = Array<Flight>;

export enum FlightsTypesNames {
  GET_FLIGHTS = '[Dashboard Page] Fetch all worker flights', // handled by effect
  SET_FLIGHTS = '[Dashboard Page] Set worker flights',
  SET_SELECTED_FLIGHT = '[Dashboard Page] Set Selected flight to the store',
  SET_WORKER_ID = '[Dashboard Page] Set worker id related to flight to the store',
  SET_TIME = '[Dashboard Page] Set time in seconds until next refresh',
  RESET_TIME = '[Dashboard Page] reset time in seconds until next refresh',
}
