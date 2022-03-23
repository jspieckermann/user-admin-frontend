import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit(user: User) {
    this.userService.addUser(user).subscribe(data => {
      this.router.navigateByUrl('').then(() => {
        window.location.reload();
      });
    });
  }

  onCancel() {
    this.router.navigateByUrl('');
  }

}
