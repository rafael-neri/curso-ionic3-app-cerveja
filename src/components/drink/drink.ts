import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the DrinkComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'drink',
  templateUrl: 'drink.html'
})
export class DrinkComponent {
  @Input() public name: string;
  @Input() public photoUrl: string;
  @Input() public beerType: string;
  @Input() public description: string;
  @Input() public size: number;
  @Output() public interest = new EventEmitter();

  text: string;

  constructor() {
    console.log('Hello DrinkComponent Component');
    this.text = 'Hello World';
  }

  ngAfterViewInit(){
    this.interest.emit(this.beerType);
  }

}
