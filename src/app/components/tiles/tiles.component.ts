import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {

  state = [
    {text: 'Квадроциклы', urlImage: 'assets/quatro.png', identifier: 'quatro'},
    {text: 'Гидроциклы', urlImage: 'assets/hydro.png', identifier: 'hydro'},
    {text: 'Катера', urlImage: 'assets/boat.png', identifier: 'boat'},
    {text: 'Снегоходы', urlImage: 'assets/snow.png', identifier: 'snow'},
    {text: 'Вездеходы', urlImage: 'assets/crossover.png', identifier: 'crossover'},
    {text: 'Двигатели', urlImage: 'assets/engine.png', identifier: 'engine'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
