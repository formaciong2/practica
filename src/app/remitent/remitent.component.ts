import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remitent',
  templateUrl: './remitent.component.html',
  styleUrls: ['./remitent.component.css']
})
export class RemitentComponent implements OnInit {

  nom: string;
  nif: string;
  adreca: string;
  cp: string;
  telefon: string;

  constructor() { }

  ngOnInit() {
  }

}
