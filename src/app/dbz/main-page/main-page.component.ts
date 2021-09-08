import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServie } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {
 

  nuevo: Personaje = {
    nombre:'',
    poder:0
  };

 

  // agregarNuevoPersonaje(event: Personaje){
  //   this.personajes.push(event);
  // }

  constructor(){
     
  }
}
