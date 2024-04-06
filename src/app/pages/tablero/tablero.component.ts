import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.sass']
})
export class TableroComponent implements OnInit {
  palabra!: string
  palabras = [
    'romeo',
    'barco',
    'lucio',
    'canta',
    'aereo',
    'carta',
    'beber'
  ]
  letras: any[] = []
  constructor(){}
  ngOnInit(): void {
    let random = 0
    do {
      random = Math.round(Math.random()*this.palabras.length)
    } while (!this.palabras[random])
    console.log(this.palabras[random])
    this.palabra=this.palabras[random]
    this.letras = this.palabras[random].split('')
    console.log(this.letras)
    
    
  }
 

  
}
