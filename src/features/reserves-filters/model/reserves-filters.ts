import { combine, createDomain, createEvent, sample } from "effector"
import { bookingModel } from "entities/booking"
import { THallplane, TPrepay, _prepaysDict_ } from "entities/booking/lib"

const filtersDomain = createDomain("filtersDomain")

const toggleVisibledFiltersClicked = filtersDomain.createEvent()
export const $visibledFilters = filtersDomain
    .createStore<boolean>(false)
    .on(toggleVisibledFiltersClicked, (state, _) => !state)

const toggleWithDeleted = createEvent()
export const $withDeleted = filtersDomain
    .createStore<boolean>(true)
    .on(toggleWithDeleted, (state, _) => !state)

sample({
    clock: $withDeleted,
    fn: (withDeleted) => ({ withDeleted }),
    target: bookingModel.events.setQueryConfig,
})

export const $hallplanes = combine(bookingModel.$hallplanes, (hallplanes) => {
    return [{ id: 0, name: "без фильтрации", value: "" }, ...hallplanes]
})

const selectHallPlane = filtersDomain.createEvent<THallplane>()
export const $selectedHallPlanes = filtersDomain
    .createStore<THallplane>({
        id: 0,
        name: "без фильтрации",
        isActive: true,
        image: "",
    })
    .on(selectHallPlane, (_, payload) => payload)

sample({
    clock: $selectedHallPlanes,
    fn: (selected) => ({ hallplaneId: selected.id }),
    target: bookingModel.events.setQueryConfig,
})

export const $prepays = filtersDomain.createStore<Array<TPrepay>>(_prepaysDict_)

const selectPrepay = filtersDomain.createEvent<TPrepay>()
export const $selectedPrepay = filtersDomain
    .createStore<TPrepay>(_prepaysDict_[0])
    .on(selectPrepay, (_, payload) => payload)

sample({
    clock: $selectedPrepay,
    fn: (selected) => ({ prepayType: selected.id }),
    target: bookingModel.events.setQueryConfig,
})

export const events = {
    selectPrepay,
    selectHallPlane,
    toggleWithDeleted,
    toggleVisibledFiltersClicked,
}
