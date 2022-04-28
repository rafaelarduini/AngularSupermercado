import { Component } from '@angular/core';

interface Produto {
  nome: string;
  categoria: string;
  estoque: number;
}

const PRODUTOS: Produto[] = [
  {
    nome: 'Farinha',
    categoria: 'alimento',
    estoque: 100,
  },
  {
    nome: 'Fermento',
    categoria: 'alimento',
    estoque: 0,
  },
  {
    nome: 'Cerveja',
    categoria: 'bebida',
    estoque: 23,
  },
  {
    nome: 'Vinho',
    categoria: 'bebida',
    estoque: 10,
  }
];

@Component({
  selector: 'ngbd-table-basic',
  templateUrl: './table-basic.html'
})
export class NgbdTableBasic {

  produtos = PRODUTOS;
}
