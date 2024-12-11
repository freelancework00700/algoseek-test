import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RelativeTimePipe } from '../pipes/relative-time.pipe';
import { FormGroup, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Note {
  user: string;
  type: string;
  content: string;
  timestamp: Date;
}

@Component({
  selector: 'app-task-1',
  styleUrl: './task-1.component.scss',
  templateUrl: './task-1.component.html',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RelativeTimePipe],
})
export class Task1Component implements OnInit {
  noteForm!: FormGroup;
  currentUser: string = 'You';
  formSubmitted: boolean = false;
  selectedNoteType: string = 'Message';
  userName: string = 'Milton Romaguera';
  noteTypes: string[] = ['Message', 'Phone', 'Coffee', 'Beer', 'Meeting'];

  notes: Note[] = [
    {
      type: 'Meeting',
      user: this.currentUser,
      content: 'A more formal meeting.',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    },
    {
      content: 'Then we had a follow-up phone call.',
      type: 'Phone',
      user: this.currentUser,
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    },
    {
      content: 'We had coffee!',
      type: 'Coffee',
      user: this.currentUser,
      timestamp: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
    },
    {
      content: 'A test note of message type!',
      type: 'Message',
      user: this.currentUser,
      timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.noteForm = this.fb.group({
      type: ['Message'],
      content: ['', Validators.required],
    });
  }

  selectNoteType(type: string) {
    this.noteForm.get('type')?.setValue(type);
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.noteForm.valid) {
      this.notes.unshift({
        content: this.noteForm.get('content')?.value,
        type: this.noteForm.get('type')?.value || 'Message',
        user: this.currentUser,
        timestamp: new Date(),
      });
      this.noteForm.reset({ type: 'Message', content: '' });
      this.formSubmitted = false;
    }
  }

  getIconClass(type: string) {
    const iconMap: { [key: string]: string } = {
      Message: 'fa fa-comment',
      Phone: 'fa fa-phone',
      Coffee: 'fa fa-coffee',
      Beer: 'fa fa-beer',
      Meeting: 'fa fa-user',
    };

    return iconMap[type] || 'fa fa-comment';
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }
}
