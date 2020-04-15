import {isPast, isSameDay} from 'date-fns'

export const getNextBirthday = (birthday) => {
  if (!birthday) {
    return new Date()
  }

  const now = new Date()
  const date = new Date(birthday)
  const currentYear = now.getFullYear()
  const day = date.getDate()
  const month = date.getMonth()
  const year = isPast(new Date(currentYear, month, day))
    ? currentYear + 1
    : currentYear

  return new Date(year, month, day)
}

export const isYouBirthday = (birthday) => {
  return isSameDay(new Date(), getNextBirthday(birthday))
}
