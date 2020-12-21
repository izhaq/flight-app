import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './interfaces.main';
import {workersReducer} from './workers/reducers';
import {flightsReducer} from '@store/flights/reducers';


export const appReducers: ActionReducerMap<AppState, any> = {
  workersState: workersReducer,
  flightsState: flightsReducer
};

