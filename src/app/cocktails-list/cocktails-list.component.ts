import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  public cocktails: Cocktail[] = [
    new Cocktail('Mojito'),
    new Cocktail('Malibu Sunrise'),
    new Cocktail('Punck'),
    new Cocktail('Canchanchara'),
    new Cocktail('Tequila Sunrise'),
    new Cocktail('San Francisco'),
    new Cocktail('Moscow Mule'),
    new Cocktail('Flying Tiger'),
    new Cocktail('Frozen Margarita'),
    new Cocktail('White Russian'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
