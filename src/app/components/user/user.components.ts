import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl:"./user.component.html",
    styleUrls:["./user.component.css"],
    // styles:[]

    // // template: "<h2>John Doe</h2>"
})

export class UserComponent {
  // properties
  firstName ="John";
  lastName="Doe";
  age=30;

  // Methods
    constructor() {
      console.log("Hello User...");

     }

     sayHello(){
       console.log(`Hello ${this.firstName}` );
       // same log bevor, but older syntax
       console.log("Hello" + "" + this.firstName);
     }

}
