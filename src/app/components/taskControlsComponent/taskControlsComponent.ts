import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-controls',
  standalone: true,
  imports: [],
  templateUrl: './taskControlsComponent.html',
  styleUrl: './taskControlsComponent.css',
})
export class TaskControlsComponent {
  @Output() filterChange = new EventEmitter<'all' | 'completed' | 'pending'>();

  onShowCompleted() {
    this.filterChange.emit('completed');
  }

  onShowPending() {
    this.filterChange.emit('pending');
  }

  onShowAll() {
    this.filterChange.emit('all');
  }
}
