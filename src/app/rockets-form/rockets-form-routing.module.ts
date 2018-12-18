import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RocketsContainerComponent } from './rockets-container/rockets-container.component';

const routes: Routes = [
  {
    path: '',
    component: RocketsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RocketsFormRoutingModule { }
