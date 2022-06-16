import { createDomain, sample } from "effector"
import { useStore } from "effector-react"
import { bookingLib, bookingModel } from "entities/booking"

const PoupupDomain = createDomain("PoupupDomain")

const openPoupup = PoupupDomain.createEvent()
const closePoupup = PoupupDomain.createEvent()
const clearMessage = PoupupDomain.createEvent()
const $openedPoupup = PoupupDomain.createStore<boolean>(false)
    .on(openPoupup, () => true)
    .reset([closePoupup])

const setMessage = PoupupDomain.createEvent<string>()

const $message = PoupupDomain.createStore<string | null>(null)
    .on(setMessage, (_, message) => message)
    .reset(clearMessage)

sample({
    clock: $message,
    source: $openedPoupup,
    filter: (pop, message) => message !== null || !pop,
    target: openPoupup,
})

export const events = {
    setMessage,
    closePoupup,
}

const useMessage = () => useStore($message)
const useOpenedPoupup = () => useStore($openedPoupup)
export const selectors = { useMessage, useOpenedPoupup }
