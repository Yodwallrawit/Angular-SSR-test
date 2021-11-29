import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-package',
  templateUrl: './table-package.component.html',
  styleUrls: ['./table-package.component.scss']
})
export class TablePackageComponent implements OnInit {
  detailTable1:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMoreDetail(){
    this.detailTable1 = !this.detailTable1;
    console.log(this.detailTable1);
    
  }

}
