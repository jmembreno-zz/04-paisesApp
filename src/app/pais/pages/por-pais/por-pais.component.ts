import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';


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

  buscar() {

    this.hayerror = false;
    //console.log('buscar',this.termino)

    this.paisServices.buscarPais(this.termino)

      .subscribe((resp) => {

       if(resp!.status==404){

          this.hayerror = true;

       }

       console.log(resp);

     
      });


  }



}
