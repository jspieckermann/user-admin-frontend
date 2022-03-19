import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserModifyComponent } from './user-modify/user-modify.component';

const routes: Routes = [
  { path: 'create', component: UserCreateComponent },
  { path: 'modify/:id', component: UserModifyComponent},
  { path: '', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
