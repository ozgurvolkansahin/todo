import { Observable } from "rxjs";
import { ToDoItem } from "../interfaces/todo.interface";
import { User } from "../interfaces/user.interface";

export abstract class TodoData {
    abstract getTodoList(): Observable<ToDoItem[]>;
    abstract getUserList(): Observable<User[]>;
    abstract editTodoItem(id): Observable<any>;
    abstract deleteTodoItem(item: ToDoItem): Observable<any>;
}
