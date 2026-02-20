import { Injectable, signal } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks = signal<Task[]>([
    { title: 'Estudiar para web', priority: 'High', completed: false },
    { title: 'Tarea de awe', priority: 'Medium', completed: true },
    { title: 'Elaborar proyecto', priority: 'Medium', completed: true }
  ]);

  tasks = this._tasks.asReadonly();

  addTask(task: Task): void {
    this._tasks.update((tasks) => [...tasks, task]);
  }

  toggleTask(index: number): void {
    this._tasks.update((tasks) => {
      const updated = [...tasks];
      updated[index] = { ...updated[index], completed: !updated[index].completed };
      return updated;
    });
  }

  deleteTask(index: number): void {
    this._tasks.update((tasks) => tasks.filter((_, i) => i !== index));
  }
}