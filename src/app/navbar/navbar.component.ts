import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isActiveSlideBar:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  showSlide(){
    this.isActiveSlideBar = !this.isActiveSlideBar
  }
  
}
