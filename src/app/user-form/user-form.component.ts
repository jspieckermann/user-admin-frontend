import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/model';
import { repeatPasswordValidator } from '../validators/confirm.password.directive';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnChanges {

  @Input()
  user: User = {} as User;

  @Output()
  myCancel: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  mySubmit: EventEmitter<User> = new EventEmitter<User>();

  userForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirm: ['', [Validators.required]],
    administrator: [false, ''] 
  }, { validators: repeatPasswordValidator });

  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit(): void { }

  ngOnChanges() {
    this.userForm.controls.name.setValue(this.user.name);
    this.userForm.controls.firstname.setValue(this.user.firstname);
    this.userForm.controls.lastname.setValue(this.user.lastname);
    this.userForm.controls.email.setValue(this.user.email);
    this.userForm.controls.administrator.setValue(this.user.administrator);

    if (this.user) {
      this.userForm.controls.password.clearValidators();
      this.userForm.controls.password.updateValueAndValidity();
      this.userForm.controls.confirm.clearValidators();
      this.userForm.controls.confirm.updateValueAndValidity();
    }
  }

  onSubmit() {
    let myUser: User = this.userForm.value;
    myUser.id = this.user.id;
    this.mySubmit.emit(myUser);
  }

  onCancel() {
    this.myCancel.emit('Cancel');
  }

  getErrorMessageForRequired(): string {
    return 'You must enter a value'
  }

  getErrorMessageForEmail(): string {
    if (this.userForm.controls.email.hasError('required')) {
      return this.getErrorMessageForRequired();
    }
    return this.userForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageForRepeatPassword(): string {
    if (this.userForm.controls.confirm.hasError('required')) {
      return this.getErrorMessageForRequired();
    }
    return this.userForm.controls.confirm.hasError('passwordNotEqual') ? 'Does not match with password' : '';
  }

}
