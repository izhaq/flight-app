import { createAction, props } from '@ngrx/store';
import {FlightsTypesNames, Flight, Flights} from './interfaces';

/** Action to fetch all 'flights' */
export const getFlights = createAction(FlightsTypesNames.GET_FLIGHTS, props<{ workerId: string }>());

/** Action to set flights in store */
export const setFlights = createAction(FlightsTypesNames.SET_FLIGHTS, props<{ flights: Flights }>());

/** Action to set selected flight in store */
export const setSelectedFlight = createAction(FlightsTypesNames.SET_SELECTED_FLIGHT, props<{ selectedFlight: Flight }>());

/** Action to set worker id related to flight in store */
export const setWorkerId = createAction(FlightsTypesNames.SET_WORKER_ID, props<{ workerId: string }>());

/** Action to start new countdown in second until next refresh */
export const resetTimer = createAction(FlightsTypesNames.RESET_TIME);

/** Action to set current time in second until next refresh */
export const setTimer = createAction(FlightsTypesNames.SET_TIME, props<{ time: number }>());

