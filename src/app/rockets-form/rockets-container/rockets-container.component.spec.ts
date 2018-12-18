import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketsContainerComponent } from './rockets-container.component';

describe('RocketsContainerComponent', () => {
  let component: RocketsContainerComponent;
  let fixture: ComponentFixture<RocketsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
