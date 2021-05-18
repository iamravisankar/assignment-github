import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {
  @Input('name') repoName: string ="" ;
  @Input('description') repoDescription: any  ;
  @Input('languages') repoLanguages: any ;

  constructor() { }

  ngOnInit(): void {
    if(this.repoLanguages){ 
   this.repoLanguages = Object.keys(this.repoLanguages).map((k) =>  [ k, this.repoLanguages[k]]); 
   }else{
this.repoLanguages = [];
   }
  }
}
