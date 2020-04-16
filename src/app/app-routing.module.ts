import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PanierComponent } from './panier/panier.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailsDetailsComponent } from './cocktail-container/cocktails-details/cocktails-details.component';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  { path: 'panier', component: PanierComponent },
  { path: 'cocktails', component: CocktailContainerComponent, children: [
    { path: 'new', component: CocktailEditComponent },
    { path: ':index/edit', component: CocktailEditComponent },
    { path: ':index', component: CocktailsDetailsComponent },
    { path: '', component: CocktailsDetailsComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
