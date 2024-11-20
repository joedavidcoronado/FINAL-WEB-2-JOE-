import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';   
import { ApiService } from '../services/apiservices.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
  email: string = ''; 
  nombrecompleto: string = ''; 
  password: string = '';
  telefono: string = ''; 
  errorMessage: string = ''; 

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSingup(){
    if (this.email && this.nombrecompleto  && this.password  && this.telefono) {
      this.apiService.singup(this.email, this.nombrecompleto, this.password, this.telefono).subscribe(
        (response) => {
          console.log('Singup exitoso', response);
          this.router.navigate(['/home']); 
        },
        (error) => {
          console.error('Error en el registro', error);
        }
      );
    } else {
      this.errorMessage = 'Por favor ingresa todos los campos';
    }
  }
}