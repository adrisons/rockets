import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rockets-container',
  templateUrl: './rockets-container.component.html',
  styleUrls: ['./rockets-container.component.css']
})
export class RocketsContainerComponent implements OnInit {
  public rocket;
  public rockets$: Subject<any[]> = new Subject();
  private rockets;
  constructor() {}

  ngOnInit() {}

  public onSave(newItem) {
    if (newItem._id === null) {
      this.rockets.push({ ...newItem, _id: this.rockets.length });
    } else {
      this.rockets[newItem._id] = { ...newItem };
    }
    this.rockets$.next(this.rockets);
  }
}
