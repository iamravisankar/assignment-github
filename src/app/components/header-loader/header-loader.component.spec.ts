import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLoaderComponent } from './header-loader.component';

describe('HeaderLoaderComponent', () => {
  let component: HeaderLoaderComponent;
  let fixture: ComponentFixture<HeaderLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
