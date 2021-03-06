import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    CommonModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
