import { BaseEntity } from "./base-entity";

/**
 * Интерфейс персонажа.
 *
 * @export
 * @interface Person
 */
export interface Person extends BaseEntity{

    /**
     * Год рождения человека, используя вселенский стандарт ДБЯ или ПБЯ — до битвы при Явине или после битвы при Явине. Битва при Явине — битва, происходящая в конце четвёртого эпизода «Звёздных войн: Новая надежда».
     *
     * @type {string}
     * @memberof Person
     */
    birth_year: string;

    /**
     * Цвет глаз этого человека. Будет «неизвестно», если неизвестно, или «н/д», если у человека нет глаза.
     *
     * @type {string}
     * @memberof Person
     */
    eye_color: string;

    /**
     * Пол этого человека. Либо «Мужской», либо «Женский», либо «неизвестно», «н/д», если у человека нет пола.
     *
     * @type {string}
     * @memberof Person
     */
    gender: string;

    /**
     * Цвет волос этого человека. Будет «неизвестно», если неизвестно, или «н/д», если у человека нет волос.
     *
     * @type {string}
     * @memberof Person
     */
    hair_color: string;

    /**
     * Рост человека в сантиметрах.
     *
     * @type {string}
     * @memberof Person
     */
    height: string;

    /**
     * Масса человека в килограммах.
     * 
     * @type {string}
     * @memberof Person
     */
    mass: string;

    /**
     * Цвет кожи этого человека.
     *
     * @type {string}
     * @memberof Person
     */
    skin_color: string;

    /**
     * URL-адрес ресурса планеты, планеты, на которой этот человек родился или обитает.
     *
     * @type {string}
     * @memberof Person
     */
    homeworld: string;

    /**
     * Массив URL-адресов киноресурсов, в которых был этот человек.
     *
     * @type {string[]}
     * @memberof Person
     */
    films: string[];

    /**
     * Массив URL-адресов видовых ресурсов, к которым принадлежит этот человек.
     *
     * @type {string[]}
     * @memberof Person
     */
    species: string[];

    /**
     * Массив URL-адресов ресурсов звездолетов, которые пилотировал этот человек.
     *
     * @type {string[]}
     * @memberof Person
     */
    starships: string[];

    /**
     * Массив URL-адресов транспортных средств, которые пилотировал этот человек. 
     *
     * @type {string[]}
     * @memberof Person
     */
    vehicles: string[];
}
