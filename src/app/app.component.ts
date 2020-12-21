import {Component, OnInit} from '@angular/core';
import {WorkersFacade} from '@facades/workers.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private workers: WorkersFacade) {
  }

  ngOnInit(): void {
    this.workers.fetchWorkers();
  }
}
