import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public href: string = "";
  getPathId:any
  constructor(private route: ActivatedRoute,private router: Router,location:Location) { 
    this.getPathId= location.prepareExternalUrl(location.path());
    console.log('getPathId',this.getPathId);
    
  }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
  }

}
