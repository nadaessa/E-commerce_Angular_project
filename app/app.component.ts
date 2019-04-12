import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceApp';
  constructor(private router: Router) { 
    let user: any = JSON.parse(localStorage.getItem('user'));

    if (user == null) {
      this.router.navigate(['/register']);  
    } else if(user.logged == 0){
      this.router.navigate(['/login']);  
    } else {
      this.router.navigate(['/home']);  
    }
    
  }

}
