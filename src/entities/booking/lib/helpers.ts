import type { TReserve, TDict, TPrepay } from "./models"

// export const _hallPlanes_: Array<THallplane> = [
//     { id: 1, name: "основной", isActive: true, image: "hall.jpeg" },
//     { id: 2, name: "вип", isActive: true, image: "vip.jpeg" },
//     { id: 3, name: "второй зал", isActive: true, image: "second.jpg" },
//     { id: 4, name: "терраса", isActive: true, image: "terrace.jpeg" },
//     { id: 5, name: "служебный", isActive: true, image: "reserve.jpeg" },
// ]

// export const _tables_: TTable[] = [
//     { id: 1, name: "стол 1", hallplaneId: 1, isActive: true },
//     { id: 2, name: "стол 2", hallplaneId: 1, isActive: true },
//     { id: 3, name: "стол 3", hallplaneId: 1, isActive: true },
//     { id: 4, name: "стол 4", hallplaneId: 1, isActive: true },
//     { id: 5, name: "стол 5", hallplaneId: 3, isActive: true },
//     { id: 6, name: "стол 6", hallplaneId: 3, isActive: true },
//     { id: 7, name: "стол 7", hallplaneId: 3, isActive: true },
//     { id: 8, name: "вип 1", hallplaneId: 2, isActive: true },
//     { id: 9, name: "вип 2", hallplaneId: 2, isActive: true },
//     { id: 10, name: "улица 1", hallplaneId: 4, isActive: true },
//     { id: 11, name: "улица 2", hallplaneId: 4, isActive: true },
//     { id: 12, name: "улица 3", hallplaneId: 4, isActive: true },
//     { id: 13, name: "служебный 1", hallplaneId: 5, isActive: true },
// ]

export const _statuses_: TDict[] = [
    { id: 1, name: "свободен", value: "free" },
    { id: 2, name: "занят", value: "ordered" },
    { id: 3, name: "недоступен", value: "outOfServie" },
]

export const _defaultReserve_: TReserve = {
    id: 0,
    table: {
        id: 0,
        name: "выберите стол",
        hallplaneId: 0,
        isActive: true,
        reserves: [],
    },
    hallplane: {
        id: 0,
        name: "выбирите зал",
        isActive: true,
        image: "hall.jpeg",
    },
    hallplaneId: 0,
    tableId: 0,
    prepay: 0,
    guests: 0,
    status: { id: 1, name: "свободен", value: "free" },
    startDate: Date.now(),
    endDate: Date.now(),
}

export const _prepaysDict_: TPrepay[] = [
    { id: 0, name: "без фильтрации", value: [] },
    { id: 1, name: "без предоплат", value: [0] },
    { id: 2, name: "от 1000 до 2000", value: [1000, 2000] },
    { id: 3, name: "от 2000 до 5000", value: [2000, 5000] },
    { id: 4, name: "от 5000 до 10000", value: [5000, 10000] },
    { id: 5, name: "от 10000", value: [10000] },
]
