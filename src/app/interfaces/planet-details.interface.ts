import { Person } from "../models/person";
import { Planet } from "../models/planet";

/**
 * Информация о планете и ее обитатели.
 *
 * @export
 * @interface PlanetData
 */
export interface PlanetDetails {
    /**
     * Информация о планете.
     *
     * @type {Planet}
     * @memberof PlanetDetails
     */
    planet: Planet;

    /**
     * Персонажи на планете.
     *
     * @type {Person[]}
     * @memberof PlanetDetails
     */
    residents: Person[]
  }