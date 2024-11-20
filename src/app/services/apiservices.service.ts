import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lugar } from '../models/lugar';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private direccion = 'https://toncipinto.nur.edu/api'; 
  constructor(private http: HttpClient) {}
 
  getLugar(id: string) {
    return this.http.get<Lugar>(`${this.direccion}/lugares/${id}`);
  }
  
  agregarLugar(lugar: Lugar) {
    return this.http.post<Lugar>(`${this.direccion}/lugares`, lugar);
  }
  
  actualizarLugar(lugar: Lugar) {
    return this.http.put<Lugar>(`${this.direccion}/lugares/${lugar.id}`, lugar);
  }

  getLugares(id: string): Observable<Lugar[]>{
  return this.http.get<Lugar[]>(`${this.direccion}/lugares/arrendatario/${id}`);
  }

  singup(email: string, nombrecompleto: String, password: string, telefono: string): Observable<User> {
    const body = { email, nombrecompleto, password, telefono};
    return this.http.post<User>(`${this.direccion}/arrendatario/registro`, body);
  }
  
  login(email: string, password: string): Observable<User> {
    const body = { email, password }; 
    return this.http.post<User>(`${this.direccion}/arrendatario/login`, body);  
  }
  
}
