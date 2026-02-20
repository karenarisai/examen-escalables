import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './taskFormComponent.html',
  styleUrl: './taskFormComponent.css',
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<Task>();

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    priority: new FormControl('Low'),
    completed: new FormControl(false),
  });

  submit() {
    if (this.form.invalid) return;
    this.taskAdded.emit(this.form.value as Task);
    this.form.reset({ priority: 'Low', completed: false });
  }
}