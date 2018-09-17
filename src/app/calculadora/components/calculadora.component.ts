import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services/calculadora.service';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
  }

}
