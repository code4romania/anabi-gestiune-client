import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {environment} from 'environments/environment';
import {ResponseWrapper} from '../model/response-wrapper.model';
import {createRequestOption} from '../model/request-util';
import {StorageSpace} from '../../../shared/models/storageSpace.model';
import {isUndefined} from 'util';

@Injectable()
export class StorageSpacesAnabiService {

  private resourceUrl = environment.api_url + '/StorageSpaces';
  storageSpaces: StorageSpace[];

  constructor(private http: Http) {
  }

  create(storageSpaces: StorageSpace): Observable<StorageSpace> {
    const copy = this.convert(storageSpaces);
    return this.http.post(this.resourceUrl, copy).map((res: Response) => {
      const jsonResponse = res.json();
      return this.convertItemFromServer(jsonResponse);
    });
  }

  update(storageSpaces: StorageSpace): Observable<StorageSpace> {
    const copy = this.convert(storageSpaces);
    return this.http.put(this.resourceUrl + '/' + storageSpaces.id, copy).map((res: Response) => {
      const jsonResponse = res.json();
      return this.convertItemFromServer(jsonResponse);
    });
  }

  find(id: number): Observable<StorageSpace> {
    return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
      const jsonResponse = res.json();
      return this.convertItemFromServer(jsonResponse);
    });
  }

  delete(id: number): Observable<Response> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }

  public list(): Observable<StorageSpace[]> {
    return this.http
      .get(environment.api_url + '/storageSpaces')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  private convertResponse(res: Response): ResponseWrapper {
    const jsonResponse = res.json();
    const result = [];
    for (let i = 0; i < jsonResponse.length; i++) {
      result.push(this.convertItemFromServer(jsonResponse[i]));
    }
    return new ResponseWrapper(res.headers, result, res.status);
  }

  /**
   * Convert a returned JSON object to StorageSpacesAnabi.
   */
  private convertItemFromServer(json: any): StorageSpace {
    const entity: StorageSpace = Object.assign(StorageSpace.empty(), json);
    return entity;
  }

  /**
   * Convert a StorageSpace to a JSON which can be sent to the server.
   */
  private convert(storageSpaces: StorageSpace): StorageSpace {
    const copy: StorageSpace = Object.assign({}, storageSpaces);
    return copy;
  }
}