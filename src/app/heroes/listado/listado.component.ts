import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  borraHeroe: string='';

  borrarHeroe(){
    this.borraHeroe = this.heroes.shift() || '';
     console.log(this.borraHeroe);
  }

}
