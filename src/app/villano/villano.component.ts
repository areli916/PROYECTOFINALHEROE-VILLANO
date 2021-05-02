import {
  Component,
  OnInit
} from '@angular/core';

import { Villano } from './villano';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {


  poder = 0;

  VILLANOS: Villano[] = [
    {id: 1, nombre: 'Freezer', poder: 0, nombrepoder: 'destruccion planetaria'},
    {id: 2, nombre: 'Madara', poder: 0, nombrepoder: 'control de chakra' },
    {id: 3, nombre: 'Pain', poder: 0, nombrepoder: 'clonacion'},
    {id: 4, nombre: 'Cell', poder: 0, nombrepoder: 'regeneracion'},
    {id: 5, nombre: 'jocker', poder:  0,nombrepoder: 'sangre toxica'}
    ];

  constructor() { }

  ngOnInit(): void {
  }
  aumentarPoder(id: number, poder: number, nom: string, nompoder: string){
    poder++;
    let itemIndex = this.VILLANOS.findIndex(item => item.id == id);
    this.VILLANOS[itemIndex] = {id:id, nombre: nom, poder:poder, nombrepoder: nompoder};
  }

}
