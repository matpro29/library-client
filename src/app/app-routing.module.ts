import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FindComponent} from './component/title/find/find.component';

const routes: Routes = [
  {
    path: 'find',
    component: FindComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
