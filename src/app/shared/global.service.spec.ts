import { TestBed } from '@angular/core/testing';
import {  async, inject } from '@angular/core/testing';

import { GlobalService } from './global.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 import { HttpClientModule , HttpClient} from '@angular/common/http';
describe('GlobalService', () => {
  let service: GlobalService;
   let httpMock: HttpTestingController;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        HttpClient,
        GlobalService
      ], 
    });

    service = TestBed.inject(GlobalService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });


  it(`API endpoint should return a valid url`, async(inject([HttpTestingController, GlobalService],
    (httpClient: HttpTestingController, service: GlobalService) => {

      


      service.apiTest()
        .subscribe((result: any) => {
          expect(result.current_user_url).toBe("https://api.github.com/user");
        });

      let req = httpMock.expectOne('https://api.github.com/');
      expect(req.request.method).toBe("GET");

      httpMock.verify();

    })));

});
