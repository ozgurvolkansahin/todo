import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TodoData } from '../data/todo.data';
import { ToDoItem } from '../interfaces/todo.interface';
import { User } from '../interfaces/user.interface';

@Injectable()
export class TodoService implements TodoData {
    constructor(private http: HttpClient) {}

    getTodoList() {
        return this.http.get<ToDoItem[]>(`${environment.apiUrl}todos`);
    }

    getUserList() {
        return this.http.get<User[]>(`${environment.apiUrl}users`);
    }

    editTodoItem(item: ToDoItem) {
        return this.http.patch<any>(`${environment.apiUrl}todos/${item.id}`, item);
    }

    deleteTodoItem(id) {
        return this.http.delete<any>(`${environment.apiUrl}todos/${id}`);
    }

}
