import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {

  public cocktail: Cocktail;

  constructor(private cocktailService: CocktailService, private panierService: PanierService) {}

  ngOnInit(): void {
    this.cocktailService.cocktail.subscribe((cocktail: Cocktail) => {
      this.cocktail = cocktail;
    })
  }

  addPanier(ingredients: Ingredient[]): void {
    this.panierService.addIngredients(ingredients);
  }

}
