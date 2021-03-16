import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path:'nav',
    component:NavbarComponent,
  },
  {
    path:'main',
    component:MainComponent,
  },
  {
    path:'app-shell',
    loadChildren: () => import('./app-shell/app-shell.module').then(m => m.AppShellModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
