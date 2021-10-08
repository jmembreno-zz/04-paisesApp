import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor(private paisServices: PaisService) { }

  termino: string = '';
  hayerror: boolean = false;
  paises: Country[] = [];


  buscar(termino: string) {

    this.hayerror = false;
    this.termino = termino;
    //console.log('buscar',this.termino)

    this.paisServices.buscarCapital(this.termino)

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


}
