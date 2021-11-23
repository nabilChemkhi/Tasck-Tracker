import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color: string="default name" ;
  @Input() text?:string;
  @Output()  btnClick = new EventEmitter();
  //@Output()  btnClick : EventEmitter<any> = new EventEmitter();
  //@Output() btnClick: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }
}
