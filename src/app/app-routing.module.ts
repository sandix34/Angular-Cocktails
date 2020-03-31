import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PanierComponent } from './panier/panier.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  { path: 'panier', component: PanierComponent },
  { path: 'cocktails', component: CocktailContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
