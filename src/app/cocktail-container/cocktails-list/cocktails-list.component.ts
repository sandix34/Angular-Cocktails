import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  @Input() cocktails: Cocktail[];
  // déclarer la propriété output qui emettra des évènements de type nombre
  @Output() pickEvent: EventEmitter<number> = new EventEmitter<number>();
  public activeCocktail: number = 0;

  // émettre un évènement à chaque fois que la méthode pickCocktail est
  pickCocktail(index: number): void {
    this.activeCocktail = index;
    this.pickEvent.emit(index);
  }

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
  }

}
