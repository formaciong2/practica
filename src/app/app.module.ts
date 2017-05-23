import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RemitentComponent } from './remitent/remitent.component';
import { ElementComponent } from './element/element.component';
import { FilaComponent } from './fila/fila.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RemitentComponent,
    ElementComponent,
    FilaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
