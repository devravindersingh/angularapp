import { Component } from '@angular/core';

@Component({
    selector : "app-user",
    // template : '<h2> john doe </h2>'
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css'],
    // styles : [`
    //     h2 {
    //         color : blue;
    //     }
    // `]

})

export class UserComponent{
    //properties
    foo : any; //any type
    firstName : string = 'John';
    lastName : string = 'Doe';
    age : number = 30;
    numberArray : number  []; //array of number
    mixedArray : any [];
    myTuple : [string, number, boolean]; // define a tuple - only things you need only

    //object
    address = {
        street : '50 main st',
        city : 'Bostan',
        state : 'MA'
    }

    //methods
    constructor(){
        this.foo = 'singh';
        this.numberArray = [2,5];
        this.myTuple = ['ravinder', 25, true];
        // console.log('hello user');
        // this.sayHello();
        // console.log(this.age);
        // this.hasBirthday();
        // console.log(this.age);
        console.log(this.addNumber(2,5));
    }

    sayHello(){
        console.log(`hello ${this.firstName}`);
    }

    hasBirthday(){
        this.age += 1;
    }

    addNumber(num1 : number , num2 : number) : number  {
        return num1 + num2;
    }
}