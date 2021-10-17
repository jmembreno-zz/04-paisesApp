import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2'

  get httpParams() {

    return new HttpParams()
      .set('fields', 'name,capital,alpha2Code,flag,population');

  }

  // https://restcountries.com/v2/alpha/nic




  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
      // .pipe(
      //   tap(
      //     console.log
      //   )
      // )
    // .pipe(
    //   catchError( err => of(['Hola Jairo Membreño']))
    // );

  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
    // .pipe(
    //   catchError( err => of(['Hola Jairo Membreño']))
    // );

  }


  obtenerpaisporId(id: string): Observable<Country> {

    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
    // .pipe(
    //   catchError( err => of(['Hola Jairo Membreño']))
    // );

  }

  //https://restcountries.com/v2/regionalbloc/{regionalbloc}

  buscarRegion(region: string): Observable<Country[]> {

    //const url = `${this.apiUrl}/regionalbloc/${region}?fields=name,capital,alpha2Code,flag,population`;
    const url = `${this.apiUrl}/regionalbloc/${region}`;



    return this.http.get<Country[]>(url, { params: this.httpParams });
      // .pipe(
      //   tap(
      //     console.log
      //   )
      // )


  }






}
