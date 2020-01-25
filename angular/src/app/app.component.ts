import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  Menus : any[] = [
    { name:"Dal"  , price:80 , quantity: 0  },
    { name:"rice"  , price:180 , quantity: 0  },
    { name:"maggie"  , price:40 , quantity: 0  },
    { name:"Paneer"  , price:190 , quantity: 0  }


  ]




}
