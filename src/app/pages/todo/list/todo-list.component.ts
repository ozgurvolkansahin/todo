import { Component, OnInit } from '@angular/core';
import { TodoData } from 'src/app/@core/data/todo.data';
import { ToDoItem } from 'src/app/@core/interfaces/todo.interface';
import { User } from 'src/app/@core/interfaces/user.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private todo: TodoData) {
    this.todo.getUserList()
    .subscribe(todoResult => {
      this.userList = todoResult;
      this.todo.getTodoList()
      .subscribe(userResult => {
        this.todoList = userResult;
        this.todoList
        .map(td => Object.assign({}, td.assignee = this.userList.find(y => y.id === td.userId).name));
      });
    });
  }

  todoList: ToDoItem[];
  userList: User[];
  page = 1;
  size = 203;
  ngOnInit(): void {
  }

  onPageChanged(e) {
    this.page = e;
  }

  returnTableList(page) {
    return this.todoList.slice((page - 1) * 10, page * 10);
  }


  deleteSucceed(e) {
    if (e !== false) {
      this.todoList.splice(this.todoList.indexOf(e), 1);
    }
  }

  editSucceed(e) {
    if (e !== false) {
      this.todoList[this.todoList
        .findIndex(a => a.id === e.selected.id)] = e.value;
    }
  }
}
