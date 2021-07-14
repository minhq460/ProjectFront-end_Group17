
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SinglePostComponent } from './single-post/single-post.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavService } from './service/nav.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './service/news.service';

import { CategoriesComponent } from './categories/categories.component';
import { FeaturedPostComponent } from './categories/featured-post/featured-post.component';
import { LatestPostsComponent } from './categories/latest-posts/latest-posts.component';
import { PopularNewsComponent } from './categories/popular-news/popular-news.component';
import { SidebarComponent } from './header/sidebar/sidebar.component';
import { ScrolltopComponent } from './scrolltop/scrolltop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StickyNavModule } from 'ng2-sticky-nav';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    SinglePostComponent,
    CategoriesComponent,
    FeaturedPostComponent,
    LatestPostsComponent,
    PopularNewsComponent,
    SidebarComponent,
    ScrolltopComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    StickyNavModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NavService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }



