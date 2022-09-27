import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAdmin: boolean = true;
  title = 'Bonjour !';

  changeAdminValue(){
    this.isAdmin = !this.isAdmin
  }
}
