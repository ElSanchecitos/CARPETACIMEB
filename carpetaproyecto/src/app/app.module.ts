import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from 'primeng/fullcalendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ActualizarInformacionComponent } from './pages/actualizar-informacion/actualizar-informacion.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PedirTransporteComponent } from './pages/pedir-transporte/pedir-transporte.component';
import { AgendarCitaComponent } from './pages/agendar-cita/agendar-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarComponent,
    RegistroComponent,
    ActualizarInformacionComponent,
    NavbarComponent,
    PedirTransporteComponent,
    AgendarCitaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FullCalendarModule

  ],
  providers: [],
  bootstrap: [AppComponent,AgendarCitaComponent
  ]
})
export class AppModule { }
