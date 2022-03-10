import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User administration';
  signedIn = false;
  user = '-';

  constructor(private keycloakService: KeycloakService) {

  }

  public ngOnInit() {
    this.keycloakService.isLoggedIn().then(
      isLogged => {
          if ( isLogged ) {
              this.signedIn = true;
              this.user = this.keycloakService.getUsername();
          }});
  }

  public signin(): void {
    this.keycloakService.login();
  }

  public signout(): void {
    this.keycloakService.logout();
  }

}
