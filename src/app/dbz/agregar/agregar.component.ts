import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServie } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  @Input() nuevo: Personaje ={
    nombre:'',
    poder:0
  };
// @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  // nuevo: Personaje = {
  //   nombre:'',
  //   poder:0
  // };
  constructor(private dbzService: DbzServie){

  }
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo ={
      nombre:'',
      poder:0
    };
  }


}
