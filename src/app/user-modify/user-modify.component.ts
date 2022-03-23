import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.css']
})
export class UserModifyComponent implements OnInit {

  private id: string = '';
  user: User = {} as User;

  constructor(private userService: UserService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.activedRoute.params.subscribe(params => {
      this.id = params['id']; 
      this.userService.getUser(this.id).subscribe(data => {
        this.user = data;
     })
   });
  }

  onSubmit(myUser: User) {
    this.userService.updateUser(myUser.id, myUser).subscribe(data => {
      this.router.navigateByUrl('').then(() => {
        window.location.reload();
      });
     });
  }

  onCancel() {
    this.router.navigateByUrl('');
  }

}
