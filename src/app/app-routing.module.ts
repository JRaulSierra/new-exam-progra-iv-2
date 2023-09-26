import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { PresentacionComponent } from './presentacion/presentacion.component';


const routes: Routes = [
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'acumulador', component: AcumuladorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }