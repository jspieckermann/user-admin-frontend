# UserAdminFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

## Screenshots
<img src="https://user-images.githubusercontent.com/15320739/160136686-31c829ce-f9ee-4fff-a189-2168c2910f72.png" width="45%"></img> <img src="https://user-images.githubusercontent.com/15320739/160136691-0f2cc9f5-df81-479a-b54f-b4b4ad5688dc.png" width="45%"></img> <img src="https://user-images.githubusercontent.com/15320739/160136692-4236f3f1-5067-457b-8aa9-9cac3df2d8b5.png" width="45%"></img> <img src="https://user-images.githubusercontent.com/15320739/160136696-6d30fb40-94eb-462e-b067-d1031f073b43.png" width="45%"></img> 

## Preconditions
### Keycloak installation and configuration
* Install Keycloak
* Add realm '__user-admin-app__'
* Create client '__user-admin-frontend__'
  * Enabled: __On__
  * Client protocol: **openid-connect**
  * Access Type: **public**
  * Standard workflow enabled: **On**
  * Direct Access Grants Enabled: **On**
  * Root URL: **http://localhost:4200**
  * Valid Redirect URIs: **http://localhost:4200/***
  * Admin URL: **http://localhost:4200**
  * Web Origins: **http://localhost:4200**
* Create client '__user-admin-backend__'
  * Enabled: __On__
  * Client protocol: **openid-connect**
  * Access Type: **bearer-only**
  * Add role __user-admin-user__ and __user-admin-admin__
* Create client '__user-admin-backend-admin'
  * Enabled: __On__
  * Client protocol: **openid-connect**
  * Access Type: **confidential**
  * Standard workflow enabled: **On**
  * Direct Access Grants Enabled: **On**
  * Root URL: **http://localhost:9090**
  * Valid Redirect URIs: **http://localhost:9090/***
  * Admin URL: **http://localhost:9090**
  * Web Origins: **http://localhost:9090**
  * Generate __Secret__ in __Credentials tab__
* Create at least one user with all __realm management__, __user-admin-user__ and __user-admin-admin__ permissions
* Used by application: Username: __user2__, Password: __password__

### Running backend
https://github.com/jspieckermann/user-admin-backend

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
