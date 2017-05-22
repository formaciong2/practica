import { Element } from "./element";
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica de Remitents';
  elements: Element[] = [{concepte:"hola",quantitat:20}, {concepte:"adios",quantitat:30}];

  afegirElement(element : Element){
    this.elements.push(element);
  }
}
