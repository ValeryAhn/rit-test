import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError,EMPTY, expand, map, Observable, of, reduce, switchMap, zip} from 'rxjs';
import { Planets } from '../interfaces/planets.interface';
import { Planet } from '../models/planet';
import { BASE_URL } from '../constants';
import { Person } from '../models/person';
import { PlanetDetails } from '../interfaces/planet-details.interface';
import { ErrorHandlerService } from './error-handler.service';

/**
 * Сервис для обработки данных для планет.
 *
 * @export
 * @class PlanetsService
 */
@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  /**
   * Creates an instance of PlanetsService.
   * @param {HttpClient} http
   * @memberof PlanetsService
   */
  constructor(
    private readonly http: HttpClient,
    private readonly errorHandler: ErrorHandlerService) { }

  /**
   * Возвращает список планет по URL .
   *
   * @param {string} [url]
   * @return {*}  {Observable<Planets>}
   * @memberof PlanetsService
   */
  private getPlanetsData(url?: string):Observable<Planets> {
    const planetsUrl = url || `${BASE_URL}/planets/`
    return this.http.get<Planets>(planetsUrl)
      .pipe(
        catchError(this.errorHandler.handleError<Planets>('Get Planets', undefined)),
      );
  }

  /**
   * Возвращает список всех планет.
   *
   * @param {(string | null)} [url]
   * @return {*}  {Observable<Planet[]>}
   * @memberof PlanetsService
   */
  getPlanets():Observable<Planet[]> {
    return this.getPlanetsData()
      .pipe(
        expand(planets => planets.next ? this.getPlanetsData(planets.next) : EMPTY),
        reduce((acc: Planet[], value: Planets) => acc.concat(...value.results), [])
      );
  }

  /**
   * Возвращает информацию о планете по id и ее обитателей.
   *
   * @param {string} id
   * @return {*}  {Observable<Planet>}
   * @memberof PlanetsService
   */
  getPlanet(id: string): Observable<PlanetDetails> {
    const url = `${BASE_URL}/planets/${id}`
    return this.http.get<Planet>(url)
      .pipe(
        catchError(this.errorHandler.handleError<Planet>('Get Planet', undefined)),
        switchMap(planet => {
          return zip<[Planet, ...Person[]]>(of(planet), ...planet.residents.map(resident => this.getPerson(resident)))
        }),
        map(([planet, ...residents]) => {
          return {planet: planet, residents: residents}
        })
      );
  }

  /**
   * Возвращает персонажа по заданному URL
   *
   * @param {string} url
   * @return {*}  {Observable<Person>}
   * @memberof PlanetsService
   */
  private getPerson(url: string): Observable<Person> {
    return this.http.get<Person>(url)
      .pipe(
        catchError(this.errorHandler.handleError<Person>('Get Planet', undefined)),
      );
  }
}
