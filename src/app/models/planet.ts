import { BaseEntity } from "./base-entity";

/**
 * Интерфейс планеты.
 *
 * @export
 * @interface Planet
 */
export interface Planet extends BaseEntity {

    /**
     * Количество стандартных часов, за которое эта планета совершает один оборот вокруг своей оси.
     *
     * @type {string}
     * @memberof Planet
     */
    rotation_period: string;

    /**
     * Количество стандартных дней, за которое эта планета совершает один оборот вокруг своей местной звезды.
     *
     * @type {string}
     * @memberof Planet
     */
    orbital_period: string;

    /**
     * Диаметр планеты.
     *
     * @type {string}
     * @memberof Planet
     */
    diameter: string;

    /**
     * Климат этой планеты. Разделяется запятой, если отличается.
     *
     * @type {string}
     * @memberof Planet
     */
    climate: string;

    /**
     * Число, обозначающее гравитацию этой планеты, где "1" - нормальное значение или 1 стандартное G. "2" - удвоенное или 2 стандартных G. «0,5» - это половина или 0,5 стандартных G.
     *
     * @type {string}
     * @memberof Planet
     */
    gravity: string;

    /**
     * Рельеф этой планеты. Разделяется запятой, если отличается.
     *
     * @type {string}
     * @memberof Planet
     */
    terrain: string;

    /**
     * Процент поверхности планеты, на которой находятся естественные воды или водоемы.
     *
     * @type {string}
     * @memberof Planet
     */
    surface_water: string;

    /**
     * Средняя популяция разумных существ, населяющих эту планету.
     *
     * @type {string}
     * @memberof Planet
     */
    population: string;

    /**
     * Массив ресурсов URL-адресов людей, которые живут на этой планете.
     *
     * @type {string[]}
     * @memberof Planet
     */
    residents: string[];

    /**
     * Массив ресурсов URL фильмов, в которых появлялась эта планета.
     *
     * @type {string[]}
     * @memberof Planet
     */
    films: string[];
}
