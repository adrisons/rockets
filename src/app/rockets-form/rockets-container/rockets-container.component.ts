import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rockets-container',
  templateUrl: './rockets-container.component.html',
  styleUrls: ['./rockets-container.component.css']
})
export class RocketsContainerComponent implements OnInit {
  public rockets$: Subject<any[]> = new Subject();
  private rockets = [];
  constructor(private _http: HttpClient) {}

  ngOnInit() {}

  public onSave(newItem) {
    if (newItem._id === null || newItem._id === undefined) {
      this.rockets.push({ ...newItem, _id: this.rockets.length });
    } else {
      this.rockets[newItem._id] = { ...newItem };
    }
    this._http
      .get('https://launchlibrary.net/1.4/launch/next/5')
      // .pipe(
      //   tap( data =>
      //     console.log(data);
      //   )
      // )
      .subscribe((data: any) => {

        this.rockets$.next(data);
      });
  }
}
