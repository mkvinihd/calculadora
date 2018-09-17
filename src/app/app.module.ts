import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/components/calculadora.component';
import { CalculadoraService } from './calculadora/services/calculadora.service';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
    
  ],
  providers: [CalculadoraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }