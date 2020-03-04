import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../../shared/cocktail.model'

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  @Input() cocktails: Cocktail[];
  // déclarer la propriété output qui emettra des évènements de type nombre
  @Output() pickEvent: EventEmitter<number> = new EventEmitter<number>();

  // émettre un évènement à chaque fois que la méthode pickCocktail est
  pickCocktail(index: number): void {
    this.pickEvent.emit(index);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
