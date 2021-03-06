import { User } from "./user.interface";

export interface ToDoItem {
    userId: number;
    id: number;
    title: string;
    assignee: string;
    completed: boolean;
}