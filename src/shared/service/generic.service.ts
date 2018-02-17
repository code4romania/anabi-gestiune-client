import {Injectable} from '@angular/core';
import {RequestMethod, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {environment} from 'environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export abstract class GenericService<T> {


  constructor(private http: HttpClient) {
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

  delete(entityId: number): Observable<Object> {
    const options = {body: {id: entityId}};
    return this.http.request('DELETE', environment.api_url + `${this.getPart()}`, options)
      .catch( err => Observable.throw(err) );
  }

  public list(): Observable<T[]> {
    return this.http
      .get(environment.api_url + this.getPart())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
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

  abstract getPart(): string;
}


