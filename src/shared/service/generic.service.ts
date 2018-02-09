import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {environment} from 'environments/environment';

@Injectable()
export abstract class GenericService<T> {


  constructor(private http: Http) {
  }

  create(itemToCreate: T): Observable<T> {
    const copy = this.convert(itemToCreate);
    return this.http.post(this.getPart(), copy).map((res: Response) => {
      const jsonResponse = res.json();
      return this.convertItemFromServer(jsonResponse);
    });
  }

  update(itemToUpdate: T): Observable<T> {
    const copy = this.convert(itemToUpdate);
    return this.http.put(this.getUpdateUrl(itemToUpdate), copy).map((res: Response) => {
      const jsonResponse = res.json();
      return this.convertItemFromServer(jsonResponse);
    });
  }

  find(id: number): Observable<T> {
    return this.http.get(`${this.getPart()}/${id}`).map((res: Response) => {
      const jsonResponse = res.json();
      return this.convertItemFromServer(jsonResponse);
    });
  }

  delete(id: number): Observable<Response> {
    return this.http.delete(`${this.getPart()}/${id}`);
  }

  public list(): Observable<T[]> {
    return this.http
      .get(environment.api_url + this.getPart())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Convert a returned JSON object to Specific object
   */
  abstract convertItemFromServer(json: any): T;

  /**
   * Convert an item to a JSON which can be sent to the server.
   */
  abstract convert(items: T): T;

  abstract getUpdateUrl(item: T): string;

  abstract getPart(): String;
}


