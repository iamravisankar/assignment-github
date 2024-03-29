import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCardComponent } from './repo-card.component';

describe('RepoCardComponent', () => {
  let component: RepoCardComponent;
  let fixture: ComponentFixture<RepoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`Repo name in the card should be declared as empty`,  (() => {
    fixture = TestBed.createComponent(RepoCardComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.repoName).toEqual("");
  }));
  
});
