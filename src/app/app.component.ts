import { ElementInterface } from "./element/element.component";
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica de Remitents';
  elements: ElementInterface[] = [{concepte:"hola",quantitat:20},{concepte:"adios",quantitat:30}];

  afegirElement(element:ElementInterface){
    this.elements.push(element);
  }
}
