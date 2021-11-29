import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public href: string = "";

  constructor(private route: ActivatedRoute,private router: Router,location:Location) { 

  }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
  }

}
