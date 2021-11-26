import { Task } from './../../Task';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();
  text: string='';
  day: string='';
  reminder: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (! this.text){
      alert('please add task!');
      return;}


    const newTask =
    {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };
   //console.log(newTask);

    //to do event emmit
    this.onAddTask.emit(newTask);

    this.text='';
    this.day='';
    this.reminder=false;

  }

}
