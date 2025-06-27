import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'calculator';
  result = "";
  arriveResult(value:string)
  {
    return this.result+= value;
  }
  calculator()
  {
    this.result = eval(this.result);
  }

  clear()
  {
    this.result = "";
  }
}
