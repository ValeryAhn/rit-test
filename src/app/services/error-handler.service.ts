import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Сервис обработки ошибок.
 *
 * @export
 * @class ErrorHandlerService
 */
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  /**
   * Обработчик ошибок.
   *
   * @template T
   * @param {string} [operation='operation']
   * @param {T} [result]
   * @return {*} 
   * @memberof ErrorHandlerService
   */
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
