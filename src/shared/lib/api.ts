import dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"

import duration from "dayjs/plugin/duration"
import relativeTime from "dayjs/plugin/relativeTime"
import ru from "dayjs/locale/ru"
dayjs.extend(weekOfYear)

dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.locale(ru)

export const daysJS = dayjs
