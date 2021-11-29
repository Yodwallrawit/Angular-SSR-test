import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SeoAndLogin';
  href: string;

  constructor(private route: ActivatedRoute,private router: Router,location:Location) { 

  }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
  }
}
