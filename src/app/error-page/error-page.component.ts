import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    // console.log('test');
    // this.route.queryParams.subscribe(data=>{
    //   console.log('test',data);
    //   var path = '/' + data["path"]
    //   if (path == undefined) {
    //     return 
    //   }else{
    //     this.router.navigate([path]);  
    //   }
    // })
    
  }

}
