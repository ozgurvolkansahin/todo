import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TodoData } from './data/todo.data';
import { TodoService } from './services/todo.service';

export const DATA_SERVICES = [
    { provide: TodoData, useClass: TodoService },
  ];

@NgModule({
    imports: [
      HttpClientModule,
    ],
})
export class CoreModule {
}
