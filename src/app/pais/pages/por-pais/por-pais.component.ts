import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  constructor(private paisServices: PaisService) { }

  termino: string = '';
  hayerror: boolean = false;
  paises: Country[] = [];


  buscar(termino: string) {

    this.hayerror = false;
    this.termino = termino;
    //console.log('buscar',this.termino)

    this.paisServices.buscarPais(this.termino)

      .subscribe((paises) => {


        this.paises = paises;


        if (this.paises[0] === undefined) {
          this.paises = [];
          this.hayerror = true;
          return;
        }



      }, (err) => {
        console.log('Error : ', err);
        this.paises = [];

      });


  }


  sugerencias(termino:string){
    this.hayerror=false;
    //TODO: Crear Sugerencias
  }



}
