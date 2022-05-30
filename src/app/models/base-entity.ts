/**
 * Сущность с базовым набором полей.
 *
 * @export
 * @interface BaseEntity
 */
export interface BaseEntity {
    /**
     * Имя сущности.
     *
     * @type {string}
     * @memberof BaseEntity
     */
    name: string;

    /**
     * Дата создания.
     *
     * @type {string}
     * @memberof BaseEntity
     */
    created: string;

    /**
     * Дата редактирования.
     *
     * @type {string}
     * @memberof BaseEntity
     */
    edited: string;
    
    /**
     * URL сущности.
     *
     * @type {string}
     * @memberof BaseEntity
     */
    url: string;
}
