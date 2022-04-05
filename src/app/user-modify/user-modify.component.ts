import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../model/model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.css']
})
export class UserModifyComponent implements OnInit, OnDestroy {

  private id: string = '';
  user: User = {} as User;
  sub: Subscription = {} as Subscription;

  constructor(private userService: UserService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.activedRoute.params.subscribe(params => {
      this.id = params['id']; 
      this.sub = this.userService.getUser(this.id).subscribe(data => {
        this.user = data;
     })
   });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit(myUser: User) {
    this.userService.updateUser(myUser.id, myUser).subscribe(data => {
      this.router.navigateByUrl('');
      this.userService.notifyObservers('Modify user');
     });
  }

  onCancel() {
    this.router.navigateByUrl('');
  }

}
