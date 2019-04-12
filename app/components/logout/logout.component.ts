import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let user: any = JSON.parse(localStorage.getItem('user'));
    user.logged = 0;
    localStorage.setItem('user', JSON.stringify(user)); 
    this.router.navigate(['/login']);  
  }

}
