import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiservices.service';  
import { Lugar } from '../models/lugar';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  lugares: Lugar[] = []; 
  errorMessage: string = '';
  userName: string = '';  
  userEmail: string = ''; 
  
  constructor(private lugarService: ApiService) {}

  ngOnInit() {
    this.userName = sessionStorage.getItem('user') || 'Usuario Desconocido';
    this.userEmail = sessionStorage.getItem('email') || 'Correo no disponible';
    const id = sessionStorage.getItem('id');
    if (id) {
      this.cargarLugares(id);
    } else {
      this.errorMessage = 'No se ha encontrado el ID del usuario.';
    }
  }

  cargarLugares(id: string) {
    this.lugarService.getLugares(id).subscribe(
      (lugares) => {
        console.log('Lugares cargados:', lugares);
        this.lugares = lugares;
      },
      (error) => {
        console.error('Error al cargar los lugares:', error);
        this.errorMessage = 'Hubo un problema al cargar los lugares';
      }
    );
  }

  onImageError(event: any) {
    event.target.src = 'assets/img/placeHolder.png'; 
  }

  agregarLugar(){

  }

  verReservas(){

  }

  editarLugar(id: string){

  }
}
