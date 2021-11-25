import { Task } from './../Task';
//import { TASKS } from './../mock-tasks';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  //private url='';

  constructor(private httpClt:HttpClient) { }

  getTasks(): Observable<Task[]>{
    //const tasks = of(TASKS);
    //return tasks;
    return this.httpClt.get<Task[]>(this.apiUrl);
  }

  deleteTask(task:Task):Observable<Task>{
   // console.log("delete from service"+task.id)
    //const url = this.apiUrl + "/" + task.id;
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClt.delete<Task>(url);
  }
}
