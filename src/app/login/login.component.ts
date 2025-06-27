import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, FormsModule, NgIf],
  template: `
    <ion-content fullscreen class="ion-padding" style="background-color: #f0f4f8; display: flex; justify-content: center; align-items: center;">
      <div style="width: 100%; max-width: 400px;">
        <div class="logo-container">
          <div class="logo">App</div>
        </div>

        <ion-card>
          <ion-card-header>
            <ion-card-title>Entrar</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
              <ion-item>
                <ion-label position="floating">E-mail</ion-label>
                <ion-input
                  type="email"
                  name="email"
                  [(ngModel)]="email"
                  required
                  email
                  #emailInput="ngModel"
                ></ion-input>
              </ion-item>
              <div *ngIf="emailInput.invalid && emailInput.touched" class="error">
                E-mail inválido
              </div>

              <ion-item>
                <ion-label position="floating">Senha</ion-label>
                <ion-input
                  type="password"
                  name="password"
                  [(ngModel)]="password"
                  required
                  minlength="8"
                  #passwordInput="ngModel"
                ></ion-input>
              </ion-item>
              <div *ngIf="passwordInput.invalid && passwordInput.touched" class="error">
                Senha deve ter no mínimo 8 caracteres
              </div>

              <ion-button
              (click)="irParaHome()"
                expand="block"
                type="submit"
                [disabled]="loginForm.invalid"
                style="margin-top: 20px;"
              >
                Entrar
              </ion-button>
            </form>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  `,
  styles: [`
    .logo-container {
      display: flex;
      justify-content: center;
      margin: 40px 0;
    }

    .logo {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
      font-weight: bold;
      font-size: 32px;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 8px 20px rgba(59, 130, 246, 0.5);
    }

    .error {
      color: #f44336;
      font-size: 12px;
      margin-left: 16px;
      margin-top: 4px;
    }
  `]
})
export class LoginComponent {
  email = '';
  password = '';

  onSubmit() {
    if (this.email && this.password.length >= 8) {
      console.log('Login com:', this.email, this.password);
    }
  }

  irParaHome(){
    window.location.href = '/home'
  }
}
