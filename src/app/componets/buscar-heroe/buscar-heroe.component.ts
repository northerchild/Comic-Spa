import { ActivatedRoute} from '@angular/router';
import { HeroService, Heroes } from '../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styleUrls: ['./buscar-heroe.component.css']
})
export class BuscarHeroeComponent implements OnInit {
	heroes:Heroes[];
	termino:string;
  constructor(private _buscarService:HeroService, private activatedRoute:ActivatedRoute, private router:Router) { 
  }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params =>{
  			this.heroes = this._buscarService.buscarHeroes(params['termino'])
  			this.termino = params["termino"]
        console.log(this.heroes);
  		})
}
   verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
  }
}

