import { TASKS } from './../../mock-tasks';
import { Task } from './../../Task';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tascks',
  templateUrl: './tascks.component.html',
  styleUrls: ['./tascks.component.css']
})
export class TascksComponent implements OnInit {
  tasks?:Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
