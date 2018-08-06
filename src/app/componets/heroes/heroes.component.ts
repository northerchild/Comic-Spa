import { Component, OnInit } from '@angular/core';
import { HeroService, Heroes } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	heroes:Heroes[];

  constructor(private _heroesService:HeroService) {
  	console.log("constructor")
   }

  ngOnInit() {
  	this.heroes = this._heroesService.getHeroes()
  	console.log(this.heroes)
  }

}
