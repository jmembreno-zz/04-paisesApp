import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`



  button{
    margin-right: 5px;
  }
  
  `
  ]
})
export class PorRegionComponent {

  // regiones:string[] = ['Africa','Americas','Asia','Europe','Oceania'];

 regiones : string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];

 regionActiva : string='';

 hayerror: boolean = false;

 paises: Country[] = [];


  constructor(private paisService:PaisService) { }

  //(region === regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'

  getClaseCSS(region: string): string {

    return (region === this.regionActiva)
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';

  }

  activaregion(region: string) {

    if(region === this.regionActiva){return};

    this.regionActiva = region;

    this.paises = [];

    this.paisService.buscarRegion(region)

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

  //TODO :HACER EL LLAMADO AL SERVICIO



}
