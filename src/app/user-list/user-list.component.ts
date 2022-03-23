import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = {} as User[];
  displayedColumns: string[] = ['id', 'name', 'firstname', 'lastname', 'email', 'administrator', 'delete'];

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUsers().subscribe(data => {this.users = data;});
  }

  ngOnInit(): void {
    
  }

  onClick(user: User): void {
      this.router.navigate(['/modify', user.id]);
  }

  delete(event: any, user: User): void {
    this.userService.deleteUser(user.id).subscribe(data => { });
    event.stopPropagation();
    this.router.navigateByUrl('').then(() => {
      window.location.reload();
    });
  }

}
