import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Para obtener el id de la URL y navegar
import { ApiService } from '../services/apiservices.service';  // Suponiendo que tienes un servicio API

@Component({
  selector: 'app-detail-lugar',
  templateUrl: './detail-lugar.page.html',
  styleUrls: ['./detail-lugar.page.scss'],
})
export class DetailLugarPage implements OnInit {
  lugar = {
    nombre: '',
    descripcion: '',
    cantPersonas: null,
    cantCamas: null,
    cantBanios: null,
    cantHabitaciones: null,
    tieneWifi: false,
    cantVehiculosParqueo: null,
    precioNoche: '',
    costoLimpieza: '',
    ciudad: '',
    latitud: '',
    longitud: '',
    arrendatario_id: 1,  // Este será el id del arrendatario, puedes obtenerlo desde sessionStorage o similar
  };

  isEditing = false;  // Esta variable indica si estamos editando un lugar o agregando uno

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const lugarId = this.route.snapshot.paramMap.get('id');
    if (lugarId) {
      this.isEditing = true;
      this.cargarLugar(lugarId);
    }
  }


  cargarLugar(id: string) {
    this.apiService.getLugar(id).subscribe(
      (lugarData) => {
        this.lugar = {
          nombre: lugarData.nombre,
          descripcion: lugarData.descripcion,
          cantPersonas: lugarData.cantPersonas !== null ? lugarData.cantPersonas : null,
          cantCamas: lugarData.cantCamas !== null ? lugarData.cantCamas : null,
          cantBanios: lugarData.cantBanios !== null ? lugarData.cantBanios : null,
          cantHabitaciones: lugarData.cantHabitaciones !== null ? lugarData.cantHabitaciones : null,
          tieneWifi: lugarData.tieneWifi,
          cantVehiculosParqueo: lugarData.cantVehiculosParqueo !== null ? lugarData.cantVehiculosParqueo : null,
          precioNoche: lugarData.precioNoche,
          costoLimpieza: lugarData.costoLimpieza,
          ciudad: lugarData.ciudad,
          latitud: lugarData.latitud,
          longitud: lugarData.longitud,
          arrendatario_id: lugarData.arrendatario_id,
          id: lugarData.id || null, 
          created_at: lugarData.created_at || null,
          updated_at: lugarData.updated_at || null,
          fotosts: lugarData.fotosts || [],  
        };
      },
      (error) => {
        console.error('Error al cargar los datos del lugar', error);
      }
    );
  }
  

  guardarLugar() {
    if (this.isEditing) {
      this.apiService.actualizarLugar(this.lugar).subscribe(
        (response) => {
          console.log('Lugar actualizado', response);
          this.router.navigate(['/home']);  
        },
        (error) => {
          console.error('Error al actualizar lugar', error);
        }
      );
    } else {
      this.apiService.agregarLugar(this.lugar).subscribe(
        (response) => {
          console.log('Lugar agregado', response);
          this.router.navigate(['/home']); 
        },
        (error) => {
          console.error('Error al agregar lugar', error);
        }
      );
    }
  }

  cancelar() {
    this.router.navigate(['/home']);  
  }
}
