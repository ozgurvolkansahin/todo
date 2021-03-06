import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/@core/interfaces/todo.interface';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() todoList: ToDoItem[];
  constructor() { }
  ngOnInit(): void {
  }

}
