import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colores } from '../model/colores.model';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {

  constructor(private http: HttpClient) { }

  getSingleColores(id: string) {​​
    return this.http.get<Colores>('https://super-rest.herokuapp.com/test/pam/' + id);
  }​​

  getColores() : Observable<[Colores]> {
    return this.http.get<[Colores]>('https://super-rest.herokuapp.com/test/pam/');

  }

  saveColores(data: Colores){
    return this.http.post('https://super-rest.herokuapp.com/test/pam/', data);
  }

  updateColores(id: string, data: Colores) {
    return this.http.put('https://super-rest.herokuapp.com/test/pam/' + id, data);
  }

  deleteColores(id: string){
    return this.http.delete('https://super-rest.herokuapp.com/test/pam/' + id);
  }
}
