import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080/',
          realm: 'user-admin-app',
          clientId: 'user-admin-frontend',
        },
        initOptions: {
            onLoad: 'login-required'
        },
        bearerExcludedUrls: ['/assets']
      });
}

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {
        provide: APP_INITIALIZER,
        useFactory: initializeKeycloak,
        multi: true,
        deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
