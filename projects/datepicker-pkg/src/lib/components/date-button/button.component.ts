import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'date-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  
  @Input() icon_name: string = "";
  @Input() color:string;
  @ViewChild('button',{static:false}) button:ElementRef;
   

  constructor() {
   
  }

  ngOnInit(): void {
  }


}

