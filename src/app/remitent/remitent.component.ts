import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-remitent',
  templateUrl: './remitent.component.html',
  styleUrls: ['./remitent.component.css']
})
export class RemitentComponent {

  nom: string;
  nif: string;
  adreca: string;
  cp: string;
  telefon: string;

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  guardar() {
	  // Implementació de l'acció de guardat.
  }
}
