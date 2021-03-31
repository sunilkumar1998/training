import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Demo';


  showDataBindingDemo=true;
  showDirectiveDemo=false;

  showdbdemo():void
  {
    this.showDataBindingDemo=true;
    this.showDirectiveDemo=false;
  }

  showdirectivedemo():void{
    this.showDataBindingDemo=false;
    this.showDirectiveDemo=true;

  }

  // a=250;
  // b=200;
  // imgsource= "../assets/TshirtFront.jpg"

  // setWidth():void
  // {
  //   this.a=200;
  //   this.b=200;
  // }

  // setDefault():void
  // {
  //   this.a=100;
  //   this.b=150;
  // }

  // changefront():void
  // {
  //   this.imgsource="../assets/Tshirtback.jpg"
  // }

  // changeback():void
  // {
  //   this.imgsource="../assets/TshirtFront.jpg"
  // }
  
}
