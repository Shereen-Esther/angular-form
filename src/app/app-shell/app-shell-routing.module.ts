import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form1Component} from './form1/form1.component';
import { TableComponent } from './table/table.component';
const routes: Routes = [
  {
    path:'form1',
    component:Form1Component
  },
  {
    path:'table',
    component:TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppShellRoutingModule { }
