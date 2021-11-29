import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AisShopUserService {
  baseURL = 'https://logicretailstg.azurewebsites.net/pagejson.php'
  detailShop: any
  constructor(private http: HttpClient) {}

  // public getDataSections(): Promise<any> {
  //   const url = 'https://logicretailstg.azurewebsites.net/page.php?branch_id=1&branch_page_id=1';
  //   return this.http.get(url).toPromise();
  // }


//   setDetailShop(detail:any){
//     this.detailShop = detail;
//     console.log(',detail',detail);
    
//   }

//   getDetailShop(){
//     return this.detailShop;
//   }

  public getPage(branchID:any,pageID:any): Promise<any> {
    return new Promise((resolve, rejects) => {
        let url: string = this.baseURL;
        let queryparam = "";
        if (branchID !== undefined && branchID !== '') {
            queryparam += "&branch_id=" + branchID 
          }
          if (pageID !== undefined && pageID !== '') {
            queryparam += "&branch_page_id=" + pageID 
          }
        if (queryparam !== undefined && queryparam !== "") {
            queryparam = queryparam.substring(1, queryparam.length)
        }
        if (queryparam !== undefined && queryparam !== "") {
            url += '?' + queryparam
        }
        console.log('url', url)

        this.http.get(url).toPromise().then((response: any) => {
            resolve(response)
        }).catch((error: any) => {
            rejects(error)
        })
    })
}

// public getPage(branchID,branchPage): Promise<any> {
//   return new Promise((resolve, rejects) => {
//       let url: string = this.baseURL;
//       let queryparam = "";

//       if (branchID !== undefined && branchID !== "") {
//           queryparam += "&branch_id=" + branchID
//       }

//       if (branchPage !== undefined && branchPage !== "") {
//           queryparam += "&branch_page_id=" + branchPage
//       }
//       if (queryparam !== undefined && queryparam !== "") {
//           queryparam = queryparam.substring(1, queryparam.length)
//       }
//       if (queryparam !== undefined && queryparam !== "") {
//           url += '?' + queryparam
//       }

//       console.log('url', url)

//       this.http.get(url).toPromise().then((response: any) => {
//           resolve(response)
//       }).catch((error: any) => {
//           rejects(error)
//       })
//   })
// }


}
