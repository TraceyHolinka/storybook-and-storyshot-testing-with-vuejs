const monthList = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']

export function apDate(date) {
  if (!date) return ''

  if (!(date instanceof Date)) {
    date = new Date(date)
  }

  const month = monthList[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  return `${month} ${day}, ${year}`
}
