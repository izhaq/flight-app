import { Component, OnInit } from '@angular/core';
import {WorkersFacade} from '@facades/workers.facade';
import {Observable} from 'rxjs';
import {TableConfig} from '@components/table/table.component';
import {Worker} from '@store/workers/interfaces';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  constructor(private workerFacade: WorkersFacade) { }

  ngOnInit(): void {
  }

  get workersConfig(): Observable<TableConfig<Worker>> {
    return this.workerFacade.getWorkersTableConfig();
  }

  onWorkerSelect(worker: Worker): void {
    this.workerFacade.setWorker(worker);
  }
}
