import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router ,NavigationEnd} from '@angular/router';
// import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AisShopUserService } from 'src/app/services/ais-shop-user.service';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public index = 0;
  public img = ''
  public dataPage:any;
  public detailPage:any;
  public dataSections:any;
  public branchId:any;
  public heroBannerImg:any;
  public pageStatus:any;
  public pathTest:any;
  public baseURLIframe ='https://www.youtube.com/embed/';
  public  baseURLLine = 'http://line.me/ti/p/~' ;
  hrefTest :any
  
  // public config: SwiperConfigInterface = {

  //   direction: 'horizontal',
  //   slidesPerView: 1,
  //   spaceBetween: 10,
  //   keyboard: false,
  //   mousewheel: false,
  //   scrollbar: false,
  //   loop: true,
  //   roundLengths: true,

  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     type: 'bullets',
  //   },    
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   breakpoints: {}

  // }
  name: any;
  shopId:any;
  pageId:any;
  public href: string = "";
  getPathId= ""
  

  constructor(private aisService : AisShopUserService,private route: ActivatedRoute,private router: Router,location:Location) {
    this.getPathId= location.prepareExternalUrl(location.path());
    if (this.getPathId !== "" || this.getPathId !== undefined) {
      this.fetchDataSection(this.getPathId)
    }
  }

  // ngOnInit(): void {
  //     this.route.queryParams.subscribe(data=>{
  //       console.log(data);
  //       if (data !== undefined || data !== null) {
  //         this.shopId = data.shop_id;
  //         this.pageId = data.page_id
  //         console.log('this.shopId',this.shopId);
  //         console.log('this.pageId',this.pageId);
  //         this.fetchDataSection(this.shopId,this.pageId);      
  //       }
  //     })
      
  // }

  //  async fetchDataSection(shopId:any,pageId:any){
  //    if (shopId && pageId) {
  //      this.aisService.getPage(shopId,pageId).then((res:any)=>{
  //        if (res !== null || res !== undefined) {
  //          this.dataPage = res.page_data;
  //          this.detailPage = res.branch_detail;
  //          this.pageStatus = res.page_status;
  //          console.log('this.dataSections',this.dataPage);
  //          console.log('this.detailPage',this.detailPage );
  //          console.log('pageStatus',this.pageStatus);
  //          this.heroBannerImg =  this.dataPage[0];
  //          this.dataSections = this.dataPage[1];   
  //          console.log('heroBannerImg',this.heroBannerImg);
            
  //          if (this.pageStatus == '0') {
  //            console.log('navigate 404');
  //           //  window.location.assign("/404")
            
  //          }
  //        }
  //      })
  //    }
  // }

  ngOnInit(): void {
    // this.href = this.router.url;
    //     console.log('full-path',this.href);
    // console.log('test12123');
    
    // this.route.queryParams.subscribe(data=>{
    //   console.log('test',data);
    //   if (data !== undefined || data !== null) {
    //     this.pathTest = data.q
    //     console.log('this.pathTest',this.pathTest);
    //     this.fetchDataSection(this.pathTest)
    //   }
    // })
    
}

 async fetchDataSection(path:any){
   if (path) {
     console.log(path.split('/'));
     this.branchId = path.split('/')[3];
     this.pageId = path.split('/')[4];
      console.log('this.branchId',this.branchId);
      console.log('this.pageId',this.pageId);
      
      this.aisService.getPage(this.branchId,this.pageId).then((res:any)=>{
        console.log('res',res);
        
        if (res !== null || res !== undefined) {
          this.dataPage = res.page_data;
          this.detailPage = res.branch_detail;
          this.pageStatus = res.page_status;
          console.log('this.dataSections',this.dataPage);
          console.log('this.detailPage',this.detailPage );
          console.log('pageStatus',this.pageStatus);
          this.heroBannerImg =  this.dataPage[0];
          this.dataSections = this.dataPage[1];   
          console.log('heroBannerImg',this.heroBannerImg);
           
          if (this.pageStatus == '0') {
            console.log('navigate 404');
            window.location.assign("/404")
          }
        }
      })
    }
}
}
