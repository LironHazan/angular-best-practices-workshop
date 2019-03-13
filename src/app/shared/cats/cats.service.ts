import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private CATS_URL = 'https://aws.random.cat/meow';

  constructor(private http: HttpClient) { }

  getCat() {
    return this.http.get(this.CATS_URL)
      .pipe(pluck('file'));
  }
}
