import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended : boolean = true;
  loaded : boolean = false;
  enabledAdd : boolean = true;
  currentClasses = {};
  currentStyles = {};

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
          image: "http://lorempixel.com/600/600/people/3",
          isActive : true,
          balance : 100,
          registered : new Date('01/02/2020 08:58:05')
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
          image: "http://lorempixel.com/600/600/people/2",
          isActive: true,
          balance : 500,
          registered : new Date('09/11/2020 11:58:05')
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
          image: "http://lorempixel.com/600/600/people/1",
          isActive : true,
          balance : 200,
          registered : new Date('17/06/2020 05:58:05')
        }
      ];

      this.loaded = true;
  
    }, 2000);

    this.setCurrentClass();
    this.setCurrentStyles();

    // this.showExtended = false;
    
  }

  setCurrentClass(){
    this.currentClasses = {
      'btn-success' : this.enabledAdd,
      'big-text' : this.showExtended
    }
  }

  setCurrentStyles(){
    this.currentStyles = {
      'padding-top' : this.showExtended ? '0' : '40px',
      'font-size' : this.showExtended ? '' : '40px'
    }
  }

  addUser(user : User){
    this.users.push(user);
  }

}
