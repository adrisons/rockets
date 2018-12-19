import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rockets-list',
  templateUrl: './rockets-list.component.html',
  styleUrls: ['./rockets-list.component.css']
})
export class RocketsListComponent implements OnInit {
  @Input() public rockets: any[] = [];
  @Output() public edit = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  public onEditClick(item) {
    this.edit.next(item);
  }
}
