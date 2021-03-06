import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from 'src/app/component/component.module';
import { routedComponents, TodoRoutingModule } from './todo-routing.module';

@NgModule({
  imports: [
    TodoRoutingModule,
    CommonModule,
    ComponentsModule,
    NgbPaginationModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TodoModule { }
