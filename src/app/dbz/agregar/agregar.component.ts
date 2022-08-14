import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

   @Input() public nuevo:Personaje ={
    nombre:'',
    poder:0
  }

  constructor( private dbzService:DbzService) { }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje>= new EventEmitter<Personaje>();
  
  public agregar():void {

    if( this.nuevo.nombre.trim().length === 0 ) {return;}
    if( this.nuevo.poder === 0 ) {return;}

    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje( this.nuevo );

      this.nuevo={
      nombre:'',
      poder:0
    }
  }

}
