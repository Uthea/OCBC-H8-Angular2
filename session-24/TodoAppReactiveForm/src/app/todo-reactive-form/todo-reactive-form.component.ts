import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Task} from "../task";

@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent implements OnInit {
  tasks : Task[] = []
  categories = ['School', 'Work', 'Hobby']

  todoForm = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(5)]),
    category : new FormControl('', [Validators.required])
  })

  get name () {
    return this.todoForm.get('name');
  }

  get category () {
    return this.todoForm.get('category');
  }

  onSubmit() : boolean {
    if (this.todoForm.invalid)
    {
      return false;
    }
    const {name, category} = this.todoForm.value;
    this.tasks.push(new Task(name, false, category))
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
