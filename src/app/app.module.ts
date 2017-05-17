import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RemitentComponent } from './remitent/remitent.component';
import { ElementComponent } from './element/element.component';
import { LlistaComponent } from './llista/llista.component';
import { FilaComponent } from './fila/fila.component';

@NgModule({
  declarations: [
    AppComponent,
    RemitentComponent,
    ElementComponent,
    LlistaComponent,
    FilaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
