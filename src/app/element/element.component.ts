import { Component, Output, EventEmitter } from '@angular/core';
import { Element } from '../element';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent{

  elementFormulari: Element;
  @Output() elementOutput: EventEmitter<Element> = new EventEmitter();

  constructor() { 
    this.elementFormulari = {"concepte": "Concepte 1", "preu":10, "quantitat":5, "descompte":10};
  }

  afegir(){
    this.elementOutput.emit(this.elementFormulari);
    this.elementFormulari = {};
  }  

}
