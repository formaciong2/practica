import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  elementFormulari: ElementInterface;
  @Output() elementOutput: EventEmitter<ElementInterface> = new EventEmitter();

  constructor() { 
    this.elementFormulari = {"concepte":"hola", "preu":10, "quantitat":5};
  }

  ngOnInit() {
  }

  afegir(){
    this.elementOutput.emit(this.elementFormulari);
    this.elementFormulari = {};
  }  

}

export interface ElementInterface{
     concepte? : string;
     preu? : number;
     quantitat? : number;
  }
