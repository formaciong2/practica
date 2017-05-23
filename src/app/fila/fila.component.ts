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
	// Llençar l'event cap al contenidor. Al contenidor realitzar el DELETE de l'element i refrescar l'array.

    this.elementsInput.splice(index,1);
  }

  getTotal() {
	  var imports = this.elementsInput.map(i => i.preu * i.quantitat * (100 - i.descompte) / 100);
	  var suma = imports.reduce((a, b) => a + b, 0);
	  return suma;
  }
}
