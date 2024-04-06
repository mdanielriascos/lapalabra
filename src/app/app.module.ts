import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroComponent } from './pages/tablero/tablero.component';
import { CasillasComponent } from './component/casillas/casillas.component';
import { FilaComponent } from './component/fila/fila.component';
import { CeldaComponent } from './component/celda/celda.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    CasillasComponent,
    FilaComponent,
    CeldaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
