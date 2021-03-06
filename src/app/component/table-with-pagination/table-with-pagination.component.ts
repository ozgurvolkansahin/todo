import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { TodoData } from 'src/app/@core/data/todo.data';
import { ToDoItem } from 'src/app/@core/interfaces/todo.interface';

@Component({
  selector: 'app-table-with-pagination',
  templateUrl: './table-with-pagination.component.html',
  styleUrls: ['./table-with-pagination.component.scss']
})
export class TableWithPaginationComponent implements OnInit {

  @ViewChild('updateModal') updateModal: TemplateRef<any>;
  constructor(private modalService: NgbModal,
              private todo: TodoData) { }
  sorted = false;
  selectedTodo: ToDoItem;
  editingTodo: ToDoItem;
  @Input() page = 1;
  @Input() todoList: ToDoItem[];
  @Output() actionEvent = new EventEmitter();
  @Output() deleteSuccess = new EventEmitter();
  @Output() editSuccess = new EventEmitter();

  ngOnInit(): void {
  }

  sortArray() {
    this.sorted = !this.sorted;
    if (this.sorted) {
      this.todoList.sort((a, b) => a.assignee.localeCompare(b.assignee));
    } else {
      this.todoList.sort((a, b) => b.assignee.localeCompare(a.assignee));
    }
  }

  openUpdateModal(content, item) {
    this.selectedTodo = JSON.parse(JSON.stringify(item));
    this.editingTodo = JSON.parse(JSON.stringify(item));
    this.modalService.open(content);
  }

  deleteItem(e) {
    console.log(e);
    this.todo.deleteTodoItem(e.id)
    .subscribe(result => {
      this.deleteSuccess.emit(e);
    }, err => {
      this.deleteSuccess.emit(false);
    });
  }

  editItem(content) {
    this.todo.editTodoItem(this.editingTodo)
    .subscribe(result => {
      this.editSuccess.emit({
        selected: this.selectedTodo,
        value: this.editingTodo}
        );
      this.modalService.dismissAll();
    }, err => {
      this.editSuccess.emit(false);
    });
  }
}
