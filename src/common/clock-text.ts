import { getTime } from '@/common/tool'

function setText(timeDiff: number, timeStyle: number, Format: string): any {
  let date: any = getTime(new Date())
  date.hours = parseInt(date.hours)

  let imgText: any

  if (timeStyle == 0) {
    let monthStr = [
        '零',
        '一',
        '二',
        '三',
        '四',
        '五',
        '六',
        '七',
        '八',
        '九',
        '十',
        '十一',
        '十二'
      ],
      monthStrE = [
        '',
        'January ',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    switch (Format) {
      case '日期时间':
        imgText = `${date.year}-${date.month}-${date.day} ${date.hours}:${
          date.min
        }:${date.sec}`
        break
      case 'yyyy-mm-dd':
        imgText = `${date.year}-${date.month}-${date.day}`
        break
      case 'yyyy/mm/dd':
        imgText = `${date.year}/${date.month}/${date.day}`
        break
      case 'yy-mm-dd':
        imgText = `${String(date.year).slice(2)}-${date.month}-${date.day}`
        break
      case 'yy/mm/dd':
        imgText = `${String(date.year).slice(2)}/${date.month}/${date.day}`
        break
      case 'mm-dd-yyyy':
        imgText = `${date.month}-${date.day}-${date.year}`
        break
      case 'mm/dd/yyyy':
        imgText = `${date.month}/${date.day}/${date.year}`
        break
      case 'mm-dd-yy':
        imgText = `${date.month}-${date.day}-${String(date.year).slice(2)}`
        break
      case 'mm/dd/yy':
        imgText = `${date.month}/${date.day}/${String(date.year).slice(2)}`
        break
      case '中文日期':
        imgText = `${date.year}年${date.month}月${date.day}`
        break
      case 'dd-mm-yyy':
        imgText = `${date.day}-${date.month}-${date.year}`
        break
      case 'dd/mm/yyy':
        imgText = `${date.day}/${date.month}/${date.year}`
        break
      case 'dd-mm-yy':
        imgText = `${date.day}-${date.month}-${String(date.year).slice(2)}`
        break
      case 'dd/mm/yy':
        imgText = `${date.day}/${date.month}/${String(date.year).slice(2)}`
        break
      case 'yyyy':
        imgText = `${date.year}`
        break
      case 'yy':
        imgText = `${String(date.year).slice(2)}`
        break
      case 'mm':
        imgText = `${date.month}`
        break
      case 'mc':
        imgText = `${date.month}月`
        break
      case 'm':
        imgText = `${new Date().getMonth() + 1}`
        break
      case 'dd':
        imgText = `${date.day}`
        break
      case 'dc':
        imgText = `${date.day}号`
        break
      case 'd':
        imgText = `${new Date().getDate()}`
        break
      case 'MON':
        imgText = `${new Date()
          .toDateString()
          .slice(4, 7)
          .toLocaleUpperCase()}`
        break
      case 'mcdc':
        imgText = `${date.month}月${date.day}日`
        break
      case 'm-d':
        imgText = `${date.month}-${date.day}`
        break
      case 'm/d':
        imgText = `${date.month}/${date.day}`
        break
      case 'fmcc':
        imgText = `${monthStr[date.month]}月`
        break
      case 'smcc':
        imgText = `${monthStr[date.month]}`
        break
      case 'Month':
        imgText = `${monthStrE[parseInt(date.month)]}`
        break
    }
  } else if (timeStyle == 1) {
    let newTime = date.hours + timeDiff
    date.hours = newTime > 24 ? newTime - 24 : newTime
    switch (Format) {
      case 'hh:mm:ss':
        imgText = `<span class="clock-text-hours">${date.hours}</span>:${
          date.min
        }:${date.sec}`
        break
      case '中文时间':
        imgText = `<span class="clock-text-hours">${date.hours}</span>时${
          date.min
        }分`
        break
      case 'hh:mm':
        imgText = `<span class="clock-text-hours">${date.hours}</span>:${
          date.min
        }`
        break
      case 'hh:mm pm':
        imgText = `<span class="clock-text-hours">${date.hours}</span>:${
          date.min
        } ${date.hours < 12 ? 'AM' : 'PM'}`
        break
      case 'hh:mm:ss pm':
        imgText = `<span class="clock-text-hours">${date.hours}</span>:${
          date.min
        }:${date.sec} ${date.hours < 12 ? 'AM' : 'PM'}`
        break
      case 'hh:mm p':
        imgText = `<span class="clock-text-hours">${date.hours}</span>:${
          date.min
        } ${date.hours < 12 ? 'A' : 'P'}`
        break
      case 'hh:mm:ss p':
        imgText = `<span class="clock-text-hours">${date.hours}</span>:${
          date.min
        }:${date.sec} ${date.hours < 12 ? 'A' : 'P'}`
        break
      case '上午下午':
        imgText = `${date.hours < 12 ? '上午' : '下午'}`
        break
      case 'ms':
        imgText = `${date.ms}`
        break
      case 'hh':
        imgText = `<span class="clock-text-hours">${date.hours}<span>`
        break
      case 'mm':
        imgText = `${date.min}`
        break
      case 'ss':
        imgText = `${date.sec}`
        break
    }
  } else if (timeStyle == 2) {
    let weekArr = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      weekStr = ['一', '二', '三', '四', '五', '六', '七']
    switch (Format) {
      case '英文':
        imgText = `${weekArr[date.week - 1]}`
        break
      case '英文简写':
        imgText = `${new Date().toDateString().slice(0, 3)}`
        break
      case '周几':
        imgText = `周${weekStr[date.week - 1]}`
        break
      case '中文简写':
        imgText = `${weekStr[date.week - 1]}`
        break
      case '数字':
        imgText = `${date.week}`
        break
      case '星期几':
        imgText = `星期${weekStr[date.week - 1]}`
        break
      case '英文大写':
        imgText = `${new Date()
          .toDateString()
          .slice(0, 3)
          .toLocaleUpperCase()}`
        break
    }
  }

  return imgText
}

export default setText
