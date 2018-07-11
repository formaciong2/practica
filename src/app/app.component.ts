import { Element } from './element';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements: Element[] = [];

  // ngOnInit() : Cal invocar l'obtenció de dades des del WS al accedir al component per primera vegada.

  afegirElement(element: Element) {

    // Cal invocar el mètode POST del WS.
    // Si retorna un error, mostrem un ngb-alert a la part superior de la pantalla.
    // Si retorna correcte:
    //   --> invocar l'obtenció de dades des del WS (igual que a ngOnInit.
    //      --> Esborrar la llista d'elements.
    //      --> Afegir tots els elements que ha retornat el WS.

    this.elements.push(element);
  }
}
