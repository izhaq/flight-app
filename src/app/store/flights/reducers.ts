import { createReducer, on, createSelector } from '@ngrx/store';
import {setSelectedFlight, setFlights, setWorkerId, setTimer} from './actions';
import {Flight, Flights, FlightsState} from './interfaces';
import { AppState } from './../interfaces.main';

export const initialState: FlightsState = {
  flights: [],
  selectedFlight: {} as Flight,
  workerId: '',
  time: 0
};

export const flightsReducer = createReducer(
  initialState,
  on(setFlights, (state, { flights }) => ({ ...state, flights: [...flights] })),
  on(setSelectedFlight, (state, { selectedFlight }) => ({ ...state, selectedFlight: {...selectedFlight} })),
  on(setWorkerId, (state, { workerId }) => ({ ...state, workerId })),
  on(setTimer, (state, { time }) => ({ ...state, time })),
);

export const flightsSelector = (state: AppState) => state.flightsState;

export const selectFlights = createSelector<AppState, FlightsState, Flights>(
  flightsSelector,
  (state: FlightsState) => state.flights
);

export const selectCurrentFlight = createSelector<AppState, FlightsState, Flight>(
  flightsSelector,
  (state: FlightsState) => state.selectedFlight
);

export const selectTimeUntilNextRefresh = createSelector<AppState, FlightsState, number>(
  flightsSelector,
  (state: FlightsState) => state.time
);

