import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { LoginComponent } from './login/login.component'; // ajuste o caminho se necessário

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet], // <- aqui importa o LoginComponent
})
export class AppComponent {
  constructor() {


    // nao tem que colocar o component aqui
  }
}
