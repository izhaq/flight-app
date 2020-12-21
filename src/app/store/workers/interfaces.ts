export interface WorkersState {
  workers: Workers;
  selectedWorker: Worker;
}

export interface Worker {
  id: string;
  name: string;
}

export type Workers = Array<Worker>;

export enum WorkersTypesNames {
  GET_WORKERS = '[Dashboard Page] Get Workers', // handled by effect
  SET_WORKERS = '[Dashboard Page] Set Workers',
  SET_WORKER = '[Dashboard Page] Set Selected Worker to the store',
}
