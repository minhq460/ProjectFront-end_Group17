import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/service/nav.service';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-latest-post-categories',
  templateUrl: './latest-post-categories.component.html',
  styleUrls: ['./latest-post-categories.component.scss'],
})
export class LatestPostCategoriesComponent implements OnInit {

  constructor(public _navService: NavService, private router: Router, private _newsService: NewsService) {}

  get RssData() {
    return this._navService.RssData;
  }

  ngOnInit(): void {}

  getTitle(title: any) {
    let a = title[0].trim();
    console.log('a:', a);

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 500);
    setTimeout(() => {
      this.router.navigate(['/single-post'], {queryParams:{'title':title}});
    }, 500);
  }

  clicktop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop>=0;
  }
}
