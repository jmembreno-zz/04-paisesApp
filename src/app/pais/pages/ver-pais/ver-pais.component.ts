import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'; //El operador switchMap te permite resivir un observable y regresar otro observable
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {

    //MANERA NUMERO 1

    /* this.activateRoute.params
    .subscribe( ({iddelpais})  =>{ //Aplico destructuracion del objeto que me trae con el codigo del pais, la variable que me trae el objeto se llama iddelpais y se encuentra en el app-routing-modules.ts
      this.paisService.obtenerpaisporId(iddelpais).
      subscribe(pais=>{
        console.log(pais);
      })
    }); */

    //MANERA NUMERO 2

    this.activateRoute.params
      .pipe(

        switchMap(({iddelpais}) => this.paisService.obtenerpaisporId(iddelpais))

      )
      .subscribe(resp => {

        console.log(resp);

      });





  }

}
