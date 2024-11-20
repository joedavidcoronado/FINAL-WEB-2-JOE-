import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/apiservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string = ''; 
  password: string = '';
  errorMessage: string = ''; 

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin() {
    this.errorMessage = '';
    
    if (this.user && this.password) {
      this.apiService.login(this.user, this.password).subscribe(
        (response) => {
          console.log('Login exitoso', response);

          if (response && response.id && response.nombrecompleto && response.email) {
            sessionStorage.setItem('user', response.nombrecompleto.toString());
            sessionStorage.setItem('id', response.id.toString());
            sessionStorage.setItem('email', response.email.toString());
  
            this.router.navigate(['/home']);
          } else {
            this.errorMessage = 'Error inesperado en los datos del usuario.';
          }
        },
        (error) => {
          console.error('Error en el login', error);
          this.errorMessage = 'Credenciales incorrectas';  
        }
      );
    } else {
      this.errorMessage = 'Por favor ingresa todos los campos';
    }
  }
}
