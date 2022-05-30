import { Planet } from "../models/planet";

/**
 * Интерфейс списка планет .
 *
 * @export
 * @interface Planets
 */
export interface Planets {

    /**
     * Количество записей
     *
     * @type {number}
     * @memberof Planets
     */
    count: number;

    /**
     * Ссылка на следующие планеты.
     *
     * @type {(string | null)}
     * @memberof Planets
     */
    next: string | null;

    /**
     * Ссылка на предыдущие планеты.
     *
     * @type {(string | null)}
     * @memberof Planets
     */
    previous: string | null;

    /**
     * Список планет.
     *
     * @type Planet[]
     * @memberof Planets
     */
    results: Planet[];
}
