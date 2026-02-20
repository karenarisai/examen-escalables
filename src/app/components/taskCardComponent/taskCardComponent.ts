import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskCardComponent.html',
  styleUrl: './taskCardComponent.css',
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() toggle = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
}
