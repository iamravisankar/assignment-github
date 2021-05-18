import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GlobalService } from '../../shared/global.service';
import { Router,  ActivatedRoute,  ParamMap } from '@angular/router';

import { faMapMarked, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  private readonly notifier: NotifierService ;
  username : string | undefined | null;
   userdata : any = {} ;
  loading : boolean = true;
  faMapMarked = faMapMarked;
  faTwitter = faTwitter;
  faExternalLinkAlt = faExternalLinkAlt;
  constructor( notifierService: NotifierService ,public http: HttpClient, public global : GlobalService ,private route: ActivatedRoute,) { 
    this.notifier = notifierService;
    this.username = this.route.snapshot.paramMap.get('username');

  }

  ngOnInit(): void {
    this.getUserdata();
  }


  getUserdata() {
    this.loading = true;  
    this.global.http.get( this.global.REST_API +'users/'+this.username,  { observe: 'response'} )
    .subscribe(data => { 
      console.log(data);
      console.log(data.body);

      
       if (data.status == 200){
      this.userdata = { ...data.body! }; 

      console.log(this.userdata);
       this.loading = false;
      } else{
        console.log(data); 
      }
     }, error => {
      this.notifier.notify('error', 'Please enter valid github username at end of the url !');

      console.log(error);
     
    });
   }
   goToLink(url: string){
    window.open(url, "_blank");
}
}
