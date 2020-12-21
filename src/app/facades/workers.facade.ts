import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '@store/interfaces.main';
import {Worker, Workers, WorkersTypesNames} from '@store/workers/interfaces';
import {selectCurrentWorker, selectWorkers} from '@store/workers/reducers';
import {ColumnConfig, TableConfig} from '@components/table/table.component';
import {map} from 'rxjs/operators';

const  workersColumns: Array<ColumnConfig<Worker>> = [
  { key: 'name', label: 'Workers' }
];

@Injectable({
  providedIn: 'root'
})
export class WorkersFacade {

  constructor(private store: Store<AppState>) { }

  getSelectedWorker(): Observable<Worker> {
    return this.store.pipe(select(selectCurrentWorker));
  }

  fetchWorkers(): void {
    this.store.dispatch({ type: WorkersTypesNames.GET_WORKERS });
  }

  getWorkers(): Observable<Workers> {
    return this.store.pipe(select(selectWorkers));
  }

  getWorkersTableConfig(): Observable<TableConfig<Worker>> {
    return this.getWorkers().pipe(map( data => ({ data, columns: workersColumns })) );
  }

  setWorker(worker: Worker): void {
    this.store.dispatch({ type: WorkersTypesNames.SET_WORKER, worker });
  }
}
