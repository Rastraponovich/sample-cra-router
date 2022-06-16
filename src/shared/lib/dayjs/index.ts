import dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"

import duration from "dayjs/plugin/duration"
import relativeTime from "dayjs/plugin/relativeTime"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import localeData from "dayjs/plugin/localeData"

import ru from "dayjs/locale/ru"
dayjs.extend(weekOfYear)
dayjs.extend(localeData)
dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault(dayjs.tz.guess())
dayjs.locale(ru)

export const daysJS = dayjs
