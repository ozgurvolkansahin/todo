import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbPagination, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginatorComponent } from './paginator/paginator.component';
import { TableWithPaginationComponent } from './table-with-pagination/table-with-pagination.component';


@NgModule({
  declarations: [
    TableWithPaginationComponent,
    PaginatorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbPaginationModule,
  ],
  exports: [
    TableWithPaginationComponent,
    PaginatorComponent],
  providers: [],
  bootstrap: [],
})
export class ComponentsModule { }
