import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  public username: String;
  constructor() {
    let user: any = JSON.parse(localStorage.getItem('user'));
    this.username = user.userData.name;
   }

  ngOnInit() {
  }

}
