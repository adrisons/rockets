import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketsNewComponent } from './rockets-new.component';

describe('RocketsNewComponent', () => {
  let component: RocketsNewComponent;
  let fixture: ComponentFixture<RocketsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
