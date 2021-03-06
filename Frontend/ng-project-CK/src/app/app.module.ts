import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StickyNavModule } from 'ng2-sticky-nav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedPostComponent } from './categories/featured-post/featured-post.component';
import { LatestPostCategoriesComponent } from './categories/latest-post-categories/latest-post-categories.component';
import { HomeComponent } from './home/home.component';
import { LatestPostsComponent } from './home/main-top/latest-posts/latest-posts.component';
import { MainBigComponent } from './home/main-top/main-big/main-big.component';
import { MainSmallComponent } from './home/main-top/main-small/main-small.component';
import { HotNewsComponent } from './home/main-center/hot-news/hot-news.component';
import { PopularNewsComponent } from './home/main-center/popular-news/popular-news.component';
import { FastNewsComponent } from './home/main-bottom/fast-news/fast-news.component';
import { WorldNewsComponent } from './home/main-bottom/world-news/world-news.component';
import { VideoNewsComponent } from './home/video-news/video-news.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './header/login/login.component';
import { RegisterComponent } from './header/register/register.component';
import { SidebarComponent } from './header/sidebar/sidebar.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { NewsService } from './service/news.service';
import { NavService } from './service/nav.service';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { ArticleContentComponent } from './single-post/article-content/article-content.component';
import { ScrolltopComponent } from './scrolltop/scrolltop.component';
import { SportNewsComponent } from './home/main-bottom/sport-news/sport-news.component';
import { HeadlineNewsComponent } from './home/headline-news/headline-news.component';
import { SearchComponent } from './search/search.component';
import { RelatedNewsComponent } from './single-post/related-news/related-news.component';
import { ChangePasswordComponent } from './header/change-password/change-password.component';
import { AlertifyService } from './service/alertify.service';
import { AuthenticationService } from './service/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    LatestPostCategoriesComponent,
    FeaturedPostComponent,
    HomeComponent,
    LatestPostsComponent,
    MainBigComponent,
    MainSmallComponent,
    HotNewsComponent,
    PopularNewsComponent,
    FastNewsComponent,
    WorldNewsComponent,
    VideoNewsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    NoPageFoundComponent,
    SinglePostComponent,
    DateAgoPipe,
    ArticleContentComponent,
    ScrolltopComponent,
    SportNewsComponent,
    HeadlineNewsComponent,
    SearchComponent,
    RelatedNewsComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    NgxPaginationModule,
    StickyNavModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NewsService, NavService, AlertifyService, AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
