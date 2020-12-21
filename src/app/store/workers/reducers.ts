import { createReducer, on, createSelector } from '@ngrx/store';
import {setWorker, setWorkers} from './actions';
import {Worker, Workers, WorkersState} from './interfaces';
import { AppState } from './../interfaces.main';

export const initialState: WorkersState = {
  workers: [],
  selectedWorker: {} as Worker
};

export const workersReducer = createReducer(
  initialState,
  on(setWorkers, (state, { workers }) => ({ ...state, workers:  [...workers] })),
  on(setWorker, (state, { worker }) => ({ ...state, selectedWorker: {...worker} })),
);

export const workersSelector = (state: AppState) => state.workersState;

export const selectWorkers = createSelector<AppState, WorkersState, Workers>(
  workersSelector,
  (state: WorkersState) => state.workers
);

export const selectCurrentWorker = createSelector<AppState, WorkersState, Worker>(
  workersSelector,
  (state: WorkersState) => state.selectedWorker
);

