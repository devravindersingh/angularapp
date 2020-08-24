import { Component, OnInit } from '@angular/core';
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
    age : null,
    address : {
      street : '',
      city : '',
      state:''
    }
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enabledAdd: boolean = false;
  showUserForm : boolean = false;


  constructor() { }

  ngOnInit() {

    //mimicking the loading from server 
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2020 08:58:05'),
          hide : true
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
          },
          isActive: true,
          registered: new Date('09/11/2020 11:58:05'),
          hide : true
        },
        {
          firstName: 'Karen',
          lastName: 'William',
          age: 26,
          address: {
            street: '55 Main st',
            city: 'Seani',
            state: 'Florida'
          },
          isActive: true,
          registered: new Date('12/06/2020 05:58:05'),
          hide : true
        }
      ];

      this.loaded = true;

    }, 2000);

    // this.showExtended = false;

  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName : '',
      lastName : '',
      age : null,
      address : {
        street : '',
        city : '',
        state:''
      }
    };
  }

  onSubmit(e){
    console.log("12312");
    e.preventDefault();
  }

  fireEvent(e){
    console.log(e.type);
    console.log(e.target.value);
    
  }
  // toggleHide(user: User){
  //   user.hide = !user.hide;
  // }

}
