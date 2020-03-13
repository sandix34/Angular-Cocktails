import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.css']
})
export class CocktailContainerComponent implements OnInit {

  public cocktails: Cocktail[] = [
    new Cocktail(
      'Mojito', 
      'https://static.cuisineaz.com/610x610/i14978-recette-de-mojito.jpeg',
      `Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche.`
      ),
    new Cocktail(
      'Tequila Sunrise',
      'https://i.pinimg.com/474x/16/40/fa/1640faacd43ac03ab0ecfc9536f5b279.jpg',
      `Le tequila sunrise est un cocktail à base de tequila, de jus d'orange, et de grenadine qui au fond du verre donne l'effet d'un lever de soleil (sunrise) ce qui a inspiré le nom de la boisson.`
      )
  ];

  public cocktail: Cocktail;

  pickCocktail(index: number): void {
    this.cocktail = this.cocktails[index];
  }

  constructor() { }

  ngOnInit(): void {
    this.cocktail = this.cocktails[0];
  }

}
