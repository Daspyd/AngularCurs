import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor', 'Capitan America']
  mostrandoBorrado: string = '';


  borrarHeroes(){

    const heroeBorrado = this.heroes.shift();
    this.mostrandoBorrado = heroeBorrado || '';
  }
}
