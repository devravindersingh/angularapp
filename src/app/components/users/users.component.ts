import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user : User = {
    firstName : '',
    lastName : '',
    email : ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enabledAdd: boolean = false;
  showUserForm : boolean = false;
  @ViewChild('userForm', {static : false}) form : any;


  constructor() { }

  ngOnInit() {

    //mimicking the loading from server 
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          email : 'john@gmail.com',
          isActive: true,
          registered: new Date('01/02/2020 08:58:05'),
          hide : true
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          email : 'kevin@yahoo.com',
          isActive: true,
          registered: new Date('09/11/2020 11:58:05'),
          hide : true
        },
        {
          firstName: 'Karen',
          lastName: 'William',
          email : 'karen@gmail.com',
          isActive: true,
          registered: new Date('12/06/2020 05:58:05'),
          hide : true
        }
      ];

      this.loaded = true;

    }, 2000);

  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName : '',
      lastName : '',
      email : ''
    };
  }

  onSubmit({value, valid} : {value : User, valid : boolean}){
    if(!valid){
      console.log('form is not valid');
    }else{
      value.isActive = true;
      value.registered = true;
      value.hide = true;
      this.users.unshift(value);
      this.form.reset();
    }
  }

}
