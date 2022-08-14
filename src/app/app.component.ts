import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo:string = 'Contador App';
  public numero:number = 10;
  public base  :number = 5;

  acumular(valor:number) {
    this.numero+= valor;
  }
}
