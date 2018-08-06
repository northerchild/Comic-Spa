import { Component, OnInit } from '@angular/core';
import { HeroService, Heroes } from '../../services/heroes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	heroes:Heroes[];

  constructor(private _heroesService:HeroService, private router:Router) {
  	console.log("constructor")
   }

  ngOnInit() {
  	this.heroes = this._heroesService.getHeroes()
  	console.log(this.heroes)
  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
  }
}
