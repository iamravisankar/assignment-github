import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GlobalService } from '../../shared/global.service';
import { faMapMarked} from '@fortawesome/free-solid-svg-icons';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  username : string = "iamravisankar" ;
  // username : string = "fabpot" ;
  userdata : any = {} ;
  loading : boolean = true;
  faMapMarked = faMapMarked;
  faTwitter = faTwitter;
  constructor( public http: HttpClient, public global : GlobalService ) { }

  ngOnInit(): void {
    this.getUserdata();
  }


  getUserdata() {
    this.loading = true;  
    this.global.http.get( this.global.REST_API +'users/'+this.username,  { observe: 'response'} )
    .subscribe(data => { 
       if (data.status == 200){
      this.userdata = { ...data.body! }; 
      console.log(this.userdata);
       this.loading = false;
      } else{
        console.log(data); 
      }
     }, error => {
      console.log(error);
     
    });
   }

}
