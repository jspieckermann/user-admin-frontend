import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.css']
})
export class UserModifyComponent implements OnInit {

  userForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirm: ['', [Validators.required]]
  });

  private id: string = '';
  private sub: any;
  user: User = {} as User;


  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activedRoute.params.subscribe(params => {
      this.id = params['id']; 
   });
   this.userService.getUser(this.id).subscribe(data => {
      this.user = data;
   })

  }

  onSubmit() {
    console.error('SUBMIT triggered: ' + this.userForm.controls.email.value);
    let user: User = {} as User;
    user.id = this.id;
    user.email = this.userForm.controls.email.value;
    user.name = this.userForm.controls.name.value;
    user.firstname = this.userForm.controls.firstname.value;
    user.lastname = this.userForm.controls.lastname.value;
    user.password = this.userForm.controls.password.value;

    console.error('SUBMIT: ' + user.id);
    this.userService.updateUser(user.id, user).subscribe(data => {
      this.router.navigateByUrl('').then(() => {
        window.location.reload();
      });
     });
 
  }

  onCancel() {
    this.router.navigateByUrl('');
  }

}
