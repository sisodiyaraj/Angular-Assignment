import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  page_title = "List of User";

  // try to comment the user data
  users = [
    {name: 'Himanshu' , username: 'himanshu101' , email: 'himanshu101@email.com'},
    {name: 'Akhil' , username: 'akhil420' , email: 'akhil420@gmail.com'},
    {name: 'Satya' , username: 'satya01' , email: 'satya01@email.com'},
    {name: 'Riya' , username: 'riya444' , email: 'riya444@hotmail.com'},
    ];

  constructor() { }

  ngOnInit(): void {
}

}
