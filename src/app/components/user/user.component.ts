import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
    selector: "app-user",
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],


})

export class UserComponent implements OnInit {

    //user object from interface
    user: User;

    constructor() {

    }

    ngOnInit() {
        // this.user = {
        //     firstName: 'John',
        //     lastName: 'Doe',
        //     age: 30,
        //     address: {
        //         street: '50 Main st',
        //         city: 'Boston',
        //         state: 'MA'
        //     }
        // };
    }

}