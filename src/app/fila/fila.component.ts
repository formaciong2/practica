import { Component, Input } from '@angular/core';
import { Element } from "../element";

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent {
  @Input() elementsInput : Element[] ;
  constructor() { 
  
  }

  esborrarElement(index : number){
    this.elementsInput.splice(index,1);
  }

}
