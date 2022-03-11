import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UserFormComponent } from './user-form/user-form.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080/',
          realm: 'user-admin-app',
          clientId: 'user-admin-frontend'
        },
        initOptions: {
          onLoad: 'login-required'
        },
        loadUserProfileAtStartUp: true,
        bearerExcludedUrls: ['/assets']
      });
}

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
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
