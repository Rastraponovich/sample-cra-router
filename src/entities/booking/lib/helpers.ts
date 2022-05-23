import type { TReserve, TDict, TTable, TPrepay, THallplane } from "./models"

export const _hallPlanes_: Array<THallplane> = [
    { id: 1, name: "основной", value: "main", image: "hall.jpeg" },
    { id: 2, name: "вип", value: "vip", image: "vip.jpeg" },
    { id: 3, name: "второй зал", value: "second", image: "second.jpg" },
    { id: 4, name: "терраса", value: "terrace", image: "terrace.jpeg" },
    { id: 5, name: "служебный", value: "reserve", image: "reserve.jpeg" },
]

export const _tables_: TTable[] = [
    { id: 1, value: 1, name: "стол 1", hallId: 1, active: true },
    { id: 2, value: 2, name: "стол 2", hallId: 1, active: true },
    { id: 3, value: 3, name: "стол 3", hallId: 1, active: true },
    { id: 4, value: 4, name: "стол 4", hallId: 1, active: true },
    { id: 5, value: 5, name: "стол 5", hallId: 3, active: true },
    { id: 6, value: 6, name: "стол 6", hallId: 3, active: true },
    { id: 7, value: 7, name: "стол 7", hallId: 3, active: true },
    { id: 8, value: 8, name: "вип 1", hallId: 2, active: true },
    { id: 9, value: 9, name: "вип 2", hallId: 2, active: true },
    { id: 10, value: 10, name: "улица 1", hallId: 4, active: true },
    { id: 11, value: 11, name: "улица 2", hallId: 4, active: true },
    { id: 12, value: 12, name: "улица 3", hallId: 4, active: true },
    { id: 13, value: 13, name: "служебный 1", hallId: 5, active: true },
]

export const _statuses_: TDict[] = [
    { id: 1, name: "свободен", value: "free" },
    { id: 2, name: "занят", value: "ordered" },
    { id: 3, name: "недоступен", value: "outOfServie" },
]

export const _defaultReserve_: TReserve = {
    id: 0,
    table: { id: 0, value: 0, name: "выберите стол", hallId: 0, active: true },
    hall: { id: 1, name: "основной", value: "main", image: "hall.jpeg" },
    price: 0,
    guests: 0,
    status: { id: 1, name: "свободен", value: "free" },
    orders: [],
}

export const _prepaysDict_: TPrepay[] = [
    { id: 0, name: "без фильтрации", value: [] },
    { id: 1, name: "без предоплат", value: [0] },
    { id: 2, name: "от 1000 до 2000", value: [1000, 2000] },
    { id: 3, name: "от 2000 до 5000", value: [2000, 5000] },
    { id: 4, name: "от 5000 до 10000", value: [5000, 10000] },
    { id: 5, name: "от 10000", value: [10000] },
]
