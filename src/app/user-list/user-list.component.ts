import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../model/model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[] = {} as User[];
  observer: Subscription;
  displayedColumns: string[] = ['id', 'name', 'firstname', 'lastname', 'email', 'administrator', 'delete'];

  @ViewChild(MatTable) table: MatTable<any> = {} as MatTable<any>;

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUsers().subscribe(data => {this.users = data;});
    this.observer = this.userService.getDataObservable().subscribe(
      () => {
        this.userService.getUsers().subscribe(data => {
          this.users = data;
          this.table.renderRows();
        });
      }
    );
    
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.observer.unsubscribe();
  }

  onClick(user: User): void {
      this.router.navigate(['/modify', user.id]);
  }

  delete(event: any, user: User): void {
    this.userService.deleteUser(user.id).subscribe(data => {
      this.userService.getUsers().subscribe(data => {
        this.users = data;
        this.table.renderRows();
      });

    });
    event.stopPropagation();
  }

}
