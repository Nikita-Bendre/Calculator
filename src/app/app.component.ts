import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = '10November';

  No1: number = 0;
  No2: number = 0;
  Result: number = 0;


  Addition() {
    this.Result = this.No1 + this.No2;
    console.log("Addition of two numbers")
    return this.Result
  }

  Substraction() {
    this.Result = this.No1 - this.No2;
    console.log("Substraction of two number is")
    return this.Result
  }

  Multiplication() {
    this.Result = this.No1 * this.No2;
    console.log("Multiplication of two number")
    return this.Result
  }

  Division() {
    this.Result = this.No1 / this.No2;
    console.log("Division of two number")
    return this.Result
  }

}

