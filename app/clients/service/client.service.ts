import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  // injecter HttpClient

  constructor(private http: HttpClient) { }

  // appel http vers l'url
  // http://localhost:3000/clients
  // avant d'écrire on teste l'url dans le navigateur

  getDatas(): Observable<Client[]>{
    // appel http
    return this.http.get<Client[]>('http://localhost:3000/clients')
  }

  public add(obj: Client): Observable<Client>{
    return this.http.post<Client>('http://localhost:3000/clients', obj);

  }
}
