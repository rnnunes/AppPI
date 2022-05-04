import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  mesesDoAno: any[] = [
    { nomeMes: 'Janeiro', valor: 1, marcado: false},
    { nomeMes: 'Fevereiro', valor: 2, marcado: false},
    { nomeMes: 'Março', valor: 3, marcado: false},
    { nomeMes: 'Abril', valor: 4, marcado: false},

  ];

  constructor() { }

  ngOnInit() {
  }

  exibirMesesDoAno() {
    console.log(this.mesesDoAno);
  }

}
