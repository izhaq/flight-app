import {WorkersState} from '@store/workers/interfaces';
import {FlightsState} from '@store/flights/interfaces';

export interface AppState {
  workersState: WorkersState;
  flightsState: FlightsState;
}
