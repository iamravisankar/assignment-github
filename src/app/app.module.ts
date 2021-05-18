import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { ReposComponent } from './components/repos/repos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ReposLoaderComponent } from './components/repos-loader/repos-loader.component';
import { HeaderLoaderComponent } from './components/header-loader/header-loader.component';
import { GlobalService } from './shared/global.service';
import { NotifierModule } from 'angular-notifier'; 
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent,
    ReposComponent,
    RepoCardComponent,
    ReposLoaderComponent,
    HeaderLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    // RouterModule.forRoot([], { useHash: true }), 
    NgxSkeletonLoaderModule.forRoot(),
    NotifierModule
  ],
  providers: [HttpClient,GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
