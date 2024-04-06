import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.sass']
})
export class FilaComponent {
  @Input() palabra!:string
  @Input() letras!:any
  @Output() verificarFila: EventEmitter<number> = new EventEmitter<number>();
  celdas = [1, 2, 3, 4, 5]

filaCompleta: boolean=false
//verifica si la fila esta completa 
controlar(): void{
 this.filaCompleta=true
 for(let i = 0; i< this.letras.length; i++){
  if (this.letras[i] !== this.palabra[i]) {
    this.filaCompleta=false
    break
  }
 }
 if (this.filaCompleta) {
  alert("muy bien")
  
 }else{
  alert("casi, sigue intentado")
 }
}

}
