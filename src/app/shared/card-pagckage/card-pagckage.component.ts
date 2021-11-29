import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pagckage',
  templateUrl: './card-pagckage.component.html',
  styleUrls: ['./card-pagckage.component.scss']
})
export class CardPagckageComponent implements OnInit {
  @Input() cardPackage :any; 

  constructor() { }

  ngOnInit(): void {
  }

}
