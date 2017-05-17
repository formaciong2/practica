import { Component, OnInit,Input } from '@angular/core';
import { ElementInterface } from "./../element/element.component";

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {
  @Input() elementsInput : ElementInterface[] ;
  constructor() { 
  
  }

  ngOnInit() {
  }

  esborrarElement(index : number){
    this.elementsInput.splice(index,1);
  }

}
