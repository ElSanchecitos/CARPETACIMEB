import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PedirTransporteComponent } from './pages/pedir-transporte/pedir-transporte.component';
import { ActualizarInformacionComponent } from './pages/actualizar-informacion/actualizar-informacion.component';
import { AgendarCitaComponent } from './pages/agendar-cita/agendar-cita.component';

const routes: Routes = [{ path: 'ingreso', component: IngresarComponent },
{ path: 'registro', component: RegistroComponent },{ path: 'pedirTransporte', component: PedirTransporteComponent },
{ path: 'actualizarInformacion', component: ActualizarInformacionComponent },{ path: 'agendarCita', component: AgendarCitaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
