import { Component, Input, OnInit } from '@angular/core';
import { AisShopUserService } from '../services/ais-shop-user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() detailShop:any
  baseURLLine = 'http://line.me/ti/p/~'
  constructor(private detailShopService : AisShopUserService) { }

  ngOnInit(): void {
    console.log('this.detailShop=>',this.detailShop);
    
  }

}
