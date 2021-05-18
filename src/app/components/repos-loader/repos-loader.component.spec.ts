import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposLoaderComponent } from './repos-loader.component';

describe('ReposLoaderComponent', () => {
  let component: ReposLoaderComponent;
  let fixture: ComponentFixture<ReposLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
