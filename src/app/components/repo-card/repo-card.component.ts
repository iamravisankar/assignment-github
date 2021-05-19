import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {
  @Input('name') repoName: string ="" ;
  @Input('description') repoDescription: any  ;
  @Input('topics') repoTopics: any = {};

  constructor() { }

  ngOnInit(): void {
     if(this.repoTopics){ 
  //  this.repoTopics = Object.keys(this.repoTopics).map((k) =>  [ k, this.repoTopics[k]]); 
   }else{
this.repoTopics.names = [];
   }
  }
}
