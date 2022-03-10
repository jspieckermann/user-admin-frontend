import { Component, OnInit } from '@angular/core';
import { User } from '../model/model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = {} as User[];
  displayedColumns: string[] = ['name', 'firstname', 'lastname', 'email'];

  constructor(userService: UserService) {
    userService.getUsers().subscribe(data => {this.users = data;});
  }

  ngOnInit(): void {
  }

}
