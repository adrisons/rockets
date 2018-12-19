import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RocketsFormRoutingModule } from './rockets-form-routing.module';
import { RocketsContainerComponent } from './rockets-container/rockets-container.component';
import { RocketsNewComponent } from './rockets-container/rockets-new/rockets-new.component';
import { RocketsListComponent } from './rockets-container/rockets-list/rockets-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RocketsContainerComponent, RocketsNewComponent, RocketsListComponent],
  imports: [
    CommonModule,
    RocketsFormRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RocketsFormModule { }
