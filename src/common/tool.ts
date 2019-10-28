//时分秒转化为秒
export function formatToS(val: string): number {
  let value = String(val)
  let h = Number(value.slice(0, 2))
  let m = Number(value.slice(3, 5))
  let s = Number(value.slice(6, 8))

  return h * 60 * 60 + m * 60 + s
}

export function getTime(date:Date) {
  let n = date
  let result:any = {
    year: n.getFullYear(),
    month: n.getMonth() + 1,
    day: n.getDate(),
    week: n.getDay(),
    hours: n.getHours() - 1,
    min: n.getMinutes(),
    sec: n.getSeconds(),
    mil: n.getMilliseconds(),
    stamp: n.getTime(),
    ms: n.getMilliseconds()
  }

  let addZero = ['month', 'day', 'hours', 'min', 'sec']
  for (const key in result) {
    if (result.hasOwnProperty(key)) {
      result[key] = String(result[key])
      const element = result[key]
      if (addZero.find(x => x == key)) {
        if (element < 10) {
          result[key] = `0${element}`
        }
      }
    }
  }

  return result
}
