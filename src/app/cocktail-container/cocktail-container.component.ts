import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.css'],
  providers: [CocktailService]
})
export class CocktailContainerComponent implements OnInit {

  public cocktail: Cocktail;

  pickCocktail(index: number): void {
    this.cocktail = this.cocktails[index];
  }

  constructor() { }

  ngOnInit(): void {
    this.cocktail = this.cocktails[0];
  }

}
