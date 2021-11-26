import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../models/empleado"

@Component({
  selector: 'app-actualizar-informacion',
  templateUrl: './actualizar-informacion.component.html',
  styleUrls: ['./actualizar-informacion.component.css']
})
export class ActualizarInformacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  usuarioArr:Usuario[]=[
    {identificacion:1, nombre:"Juan Díaz", telefono:"321 176 8721", edad:"29", direccion:"arriba de su casa",
     correo:"JuanDíaz@gmail.com", tipoDeSangre:"+O", peso:"Juan 68", estatura:"67", genero:"H"}
  ];
selectedEmp : Usuario = new Usuario();

editarGuardar(){
  if (this.selectedEmp.identificacion==0){
    this.selectedEmp.identificacion = this.usuarioArr.length + 1;
    this.usuarioArr.push(this.selectedEmp);
  }
  this.selectedEmp= new Usuario();
}
editar(emp:Usuario){
  this.selectedEmp=emp;

}

}
