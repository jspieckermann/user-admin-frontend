import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../model/model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirm: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let user: User = this.userForm.value;
    this.userService.addUser(user).subscribe(data => { });
    this.router.navigateByUrl('').then(() => {
      window.location.reload();
    });;
  }

  onCancel() {
    this.router.navigateByUrl('');
  }

}
