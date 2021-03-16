import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppShellRoutingModule } from './app-shell-routing.module';
import { Form1Component } from './form1/form1.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [Form1Component, TableComponent],
  imports: [
    CommonModule,
    AppShellRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    Form1Component
  ]
})
export class AppShellModule { }