import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposComponent } from './repos.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 
 import { HttpClientModule , HttpClient} from '@angular/common/http';
describe('ReposComponent', () => {
  let component: ReposComponent;
  let fixture: ComponentFixture<ReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [HttpClientTestingModule], 
      providers: [HttpClient], 
      declarations: [ ReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
