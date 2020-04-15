import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {

  public cocktail: Cocktail;
  public index;

  constructor(
    private cocktailService: CocktailService, 
    private panierService: PanierService, 
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if(params.get('index')) {
        this.index = params.get('index'),
        this.cocktail = this.cocktailService.getCocktail(params.get('index'));
      } else {
        this.index = 0;
        this.cocktail = this.cocktailService.getCocktail(0);
      }
    });
  }

  addPanier(ingredients: Ingredient[]): void {
    this.panierService.addIngredients(ingredients);
  }

  getUrl() {
    return '/cocktails/' + this.index + '/edit'
  }

}
