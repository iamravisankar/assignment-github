import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 
import { UserprofileComponent } from './userprofile.component';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { NotifierModule } from 'angular-notifier'; 
import {  ActivatedRoute } from '@angular/router';

describe('UserprofileComponent', () => {
  let component: UserprofileComponent;
  let fixture: ComponentFixture<UserprofileComponent>;
  
  
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,NotifierModule], 
      providers: [HttpClient,NotifierService, {provide: ActivatedRoute,useValue: {
        snapshot: {
            paramMap: {
                get(): string {
                    return '123';
                },
            },
        },
    }, }], 
      declarations: [ UserprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`Loading variable must be true`,  (() => {
    fixture = TestBed.createComponent(UserprofileComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.loading).toEqual(true);
  }));
  

});
