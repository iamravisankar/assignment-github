import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {forkJoin} from "rxjs";
import {tap} from "rxjs/operators";
import {GlobalService } from '../../shared/global.service'
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  @Input('username') username: string | undefined;
  loading : boolean = true;
  reposlist : any = [];
  reposlistarray : any[] = [];
  page : number  = 1;
  pageSize : number  = 10;

  constructor(  public global : GlobalService ) { }

  ngOnInit(): void {
    this.getRepos();
  }

 


   getRepos() {
    this.loading = true;  
    this.global.http.get(  'https://api.github.com/users/'+this.username+'/repos' ,  { observe: 'response'} )
    .subscribe(data => { 
       if (data.status == 200){
      this.reposlist = { ...data.body! }; 
      console.log(this.reposlist);
      this.reposlistarray = Object.keys(this.reposlist).map((k) => this.reposlist[k]);
      console.log(this.reposlist);
      this.getTopics();
        //  this.reposlist = Object.entries(this.reposlist);
      console.log(this.reposlist);
     
      } else{
        console.log(data); 
      }
     }, error => {
      console.log(error);
     
    });
   }

   
  getTopics(){
    
    console.log('getting topics...');
    let urllist  = []; 
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept':  'application/vnd.github.mercy-preview+json',
       })
    };
    for( let i = 0; i < this.reposlistarray.length; i++){ 
        urllist.push(this.global.http.get(this.reposlistarray[i].url + '/topics',httpOptions));
     }
    forkJoin(urllist).subscribe(results => { 
      console.log(results);
      for( let i = 0; i < results.length; i++){
        console.log("results...........");
        console.log(results[i]);
       this.reposlistarray[i].repotopics = results[i]; 

      }  
      this.loading = false;

       console.log(this.reposlistarray);
    });
  }

}
