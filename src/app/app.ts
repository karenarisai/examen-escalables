import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './components/taskFormComponent/taskFormComponent';
import { TaskControlsComponent } from './components/taskControlsComponent/taskControlsComponent';
import { TaskCardComponent } from './components/taskCardComponent/taskCardComponent';
import { TaskService } from './services/TaskService';
import { Task } from './interfaces/task.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TaskFormComponent,
    TaskControlsComponent,
    TaskCardComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private filterState = signal<'all' | 'completed' | 'pending'>('all');
  protected readonly title = signal('Task Manager');

  protected filteredTasks = computed(() => {
    const tasks = this.taskService.tasks();
    const filter = this.filterState();

    switch (filter) {
      case 'completed':
        return tasks
          .map((task, index) => ({ task, index }))
          .filter(({ task }) => task.completed);
      case 'pending':
        return tasks
          .map((task, index) => ({ task, index }))
          .filter(({ task }) => !task.completed);
      default:
        return tasks.map((task, index) => ({ task, index }));
    }
  });

  constructor(protected taskService: TaskService) {}

  onAddTask(task: Task) {
    this.taskService.addTask(task);
  }

  onFilterChange(filter: 'all' | 'completed' | 'pending') {
    this.filterState.set(filter);
  }

  onToggleTask(index: number) {
    this.taskService.toggleTask(index);
  }

  onDeleteTask(index: number) {
    this.taskService.deleteTask(index);
  }
}
