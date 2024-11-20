export interface Lugar {
  id?: number;
  nombre: string;
  descripcion: string;
  cantPersonas?: number | null; 
  cantCamas?: number | null;
  cantBanios?: number | null;  
  cantHabitaciones?: number | null;
  tieneWifi: boolean;
  cantVehiculosParqueo?: number | null;
  precioNoche: string;
  costoLimpieza: string;
  ciudad: string;
  latitud: string;
  longitud: string;
  arrendatario_id: number;
  created_at?: string;
  updated_at?: string;
  fotosts?: any[]; 
}
