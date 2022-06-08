import { createDomain, sample } from "effector"
import { useStore } from "effector-react"

const AppDomain = createDomain("AppDomain")

const initApp = AppDomain.createEvent("initApp")
const startedApp = AppDomain.createEvent("startedApp")

export const $appStarted = AppDomain.createStore<boolean>(false).on(startedApp, () => true)

const setEventMessage = AppDomain.createEvent<string>()

const $eventMessages = AppDomain.createStore<Array<string>>([])
    .on(setEventMessage, (state, event) => [...state, event])
    .reset([$appStarted])

sample({
    clock: initApp,
    fn: () => "start initial App",
    target: setEventMessage,
})

const useAppStarted = () => useStore($appStarted)
const useEventMessages = () => useStore($eventMessages)

export const selectors = {
    useAppStarted,
    useEventMessages,
}
export const events = { initApp, setEventMessage, startedApp }
