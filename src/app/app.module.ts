import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InfoDisplayModule } from 'assure-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InfoDisplayModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    PresentacionComponent,
    AcumuladorComponent,
    FormularioComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
