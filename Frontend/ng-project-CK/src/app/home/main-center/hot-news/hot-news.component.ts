import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RssItem } from 'src/app/model/news-rss';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.scss'],
})
export class HotNewsComponent implements OnInit {
  @Input('itemHot') item!: RssItem;

  constructor(private router: Router, private _newsService: NewsService) {}

  ngOnInit(): void {}

  getTitle(title: any) {
    let a = title[0].trim();
    console.log('a:', a);

    // this._newsService.setCurrentTitle(a);
     setTimeout(() => {
      this.router.navigate(['/home']);
    }, 500);
    setTimeout(() => {
      this.router.navigate(['/single-post'], {queryParams:{'title':title}});
    }, 500);
  }

  clicktop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }

}
