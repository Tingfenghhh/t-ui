import dayjs from 'dayjs'

export const getXAxis = (type: DropSelectChangeValue) => {
  // 如果为15或者30天，返回当前日期的前15或者30天
  if (type === '15' || type === '30') {
    const arr = []
    for (let i = 0; i < Number(type); i++) {
      arr.push(dayjs().subtract(i, 'day').format('MM月DD日'))
    }
    return arr.reverse()
  }
  // 如果为180天，返回当前日期的前6个月的月份
  if (type === '180') {
    const arr = []
    for (let i = 0; i < 6; i++) {
      arr.push(dayjs().subtract(i, 'month').format('YYYY/MM'))
    }
    return arr.reverse()
  }
  // 如果为365天，返回当前日期的前12个月的月份
  if (type === '365') {
    const arr = []
    for (let i = 0; i < 12; i++) {
      arr.push(dayjs().subtract(i, 'month').format('YYYY/MM'))
    }
    return arr.reverse()
  }
  // 如果为三年，返回当前日期的前三年的年份
  if (type === '1095') {
    const arr = []
    for (let i = 0; i < 3; i++) {
      arr.push(dayjs().subtract(i, 'year').format('YYYY年'))
    }
    return arr.reverse()
  }
  return []
}

const nameType = ['访问量', '点赞量', '求更新', '海报轮播', '分享', '关注']
const colorList = ['#5087ec', '#68bbc4', '#58a55c', '#f2bd42', '#ee752f', '#d95040']

export const codeToNameType = (code: string): number | null => {
  switch (code) {
    case 'VISIT':
      return 1
    case 'GIVE_A_LIKE':
      return 2
    case 'ASK_FOR_UPDATE':
      return 3
    case 'POSTER':
      return 4
    case 'SHARING':
      return 5
    case 'PAY_ATTENTION_TO':
      return 6
    default:
      return null
  }
}

export const getSeries = (type: DropSelectChangeValue): LineChartSeriesItem[] => {
  // 如果为15或者30天，返回当前日期的前15或者30天随机生成的数据
  if (type === '15' || type === '30') {
    const arr: LineChartSeriesItem[] = []
    for (let i = 0; i < 6; i++) {
      arr.push({
        name: nameType[i],
        // stack: '总量',
        data: Array.from({ length: Number(type) }, () => Math.floor(0)),
        color: colorList[i],
      })
    }
    return arr
  }
  // 如果为180或者365天，返回当前日期的前6或者12个月的月份随机生成的数据
  if (type === '180' || type === '365') {
    const arr: LineChartSeriesItem[] = []
    for (let i = 0; i < 6; i++) {
      arr.push({
        name: nameType[i],
        // stack: '总量',
        data: Array.from({ length: Number(Number(type) / 30) }, () => Math.floor(0)),
        color: colorList[i],
      })
    }
    return arr
  }
  // 如果为三年，返回当前日期的前三年的年份随机生成的数据
  if (type === '1095') {
    const arr: LineChartSeriesItem[] = []
    for (let i = 0; i < 6; i++) {
      arr.push({
        name: nameType[i],
        // stack: '总量',
        data: Array.from({ length: 3 }, () => Math.floor(0)),
        color: colorList[i],
      })
    }
    return arr
  }

  return []
}

export const getSeriesOfBack = (type: DropSelectChangeValue, name?: string): GetLineChartSeriesOfBacItem[] => {
  // 如果为15或者30天，返回当前日期的前15或者30天随机生成的数据
  if (type === '15' || type === '30') {
    const arr: GetLineChartSeriesOfBacItem[] = []
    arr.push({
      name: name ?? '用户指数',
      // stack: '总量',
      // data: Array.from({ length: Number(type) }, () => Math.floor(0)),
      // 暂时模拟
      data: Array.from({ length: Number(type) }, () => Number((Math.random() * 600 + 20).toFixed(0))),
    })
    return arr
  }
  // 如果为180或者365天，返回当前日期的前6或者12个月的月份随机生成的数据
  if (type === '180' || type === '365') {
    const arr: GetLineChartSeriesOfBacItem[] = []

    arr.push({
      name: '用户指数',
      // stack: '总量',
      data: Array.from({ length: Number(Number(type) / 30) }, () => Math.floor(0)),
    })

    return arr
  }
  // 如果为三年，返回当前日期的前三年的年份随机生成的数据
  if (type === '1095') {
    const arr: GetLineChartSeriesOfBacItem[] = []

    arr.push({
      name: '用户指数',
      // stack: '总量',
      data: Array.from({ length: 3 }, () => Math.floor(0)),
    })

    return arr
  }

  return []
}

export const getHistogramXdata = (): string[] => {
  const arr = []
  for (let i = 0; i < 12; i++) {
    arr.push(dayjs().subtract(i, 'month').format('YYYY/MM'))
  }
  return arr.reverse()
}

export const getHistogramSeries = (): GetHistogramChartsSeriesItem => {
  return {
    name: '覆盖人数',
    data: Array.from({ length: 12 }, () => 0),
  }
}
