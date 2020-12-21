import { createAction, props } from '@ngrx/store';
import {WorkersTypesNames, Worker, Workers} from './interfaces';

/** Action to fetch all 'workers' */
export const getWorkers = createAction(WorkersTypesNames.GET_WORKERS);

/** Action to set workers in store */
export const setWorkers = createAction(WorkersTypesNames.SET_WORKERS, props<{ workers: Workers }>());

/** Action to set selected Worker in store */
export const setWorker = createAction(WorkersTypesNames.SET_WORKER, props<{ worker: Worker }>());
