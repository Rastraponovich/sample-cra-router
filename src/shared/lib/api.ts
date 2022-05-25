import dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"
import ru from "dayjs/locale/ru"
dayjs.extend(weekOfYear)
dayjs.locale(ru)

export const daysJS = dayjs
