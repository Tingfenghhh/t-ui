import { Message } from '@arco-design/web-vue'
import { ValidatedError } from '@arco-design/web-vue/es/form/interface'

/**
 * @description 提示错误信息
 * @date 16/06/2022
 * @param {(Record<string, ValidatedError> | undefined)} errors
 */
export function formErrorMessage(errors: Record<string, ValidatedError> | undefined) {
  const err = Object.values(errors as Record<string, ValidatedError>)
  Message.error(err[0].message)
}

/**
 * @description 首字母大写
 * @date 16/06/2022
 * @param {string} str
 * @return {*}  {string}
 */
export function firstToUpperCase(str: string): string {
  if (!str) return str
  return str[0].toUpperCase() + str.slice(1)
}

/**
 * @description 查询树形结构路径
 * @date 16/06/2022
 * @export
 * @param {any[]} tree
 * @param {(data: any) => boolean} func
 * @param {any[]} [path=[]]
 * @return {*}  {any[]}
 */
export function treeFindPath(tree: any[], func: (data: any) => boolean, path: any[] = []): any[] {
  if (!tree) return []
  // eslint-disable-next-line no-restricted-syntax
  for (const data of tree) {
    path.push(data.label)
    if (func(data)) return path
    if (data.children) {
      const findChildren = treeFindPath(data.children, func, path)
      if (findChildren.length) return findChildren
    }
    path.pop()
  }
  return []
}

/**
 * @description 获取汉字
 * @date 16/06/2022
 * @export
 * @param {string} val
 * @param {*} [def='']
 * @return {*}
 */
export function getText(val: string, def: any = ''): string {
  if (/[\u4e00-\u9fa5]/.test(val)) {
    const arr = val.match(/[\u4e00-\u9fa5]/)
    return arr ? arr[0] : def
  }
  return def
}

/**
 * @description 获取数字
 * @date 16/06/2022
 * @export
 * @param {string} val
 * @param {*} [def='']
 * @return {*}
 */
export function getNumber(val: string, def = 0): number {
  if (new RegExp(/([0-9]+)/g).test(val)) {
    const arr = val.match(new RegExp(/([0-9]+)/g))
    return arr ? Number(arr[0]) : def
  }
  return def
}

/**
 * @description px转vw-带单位
 * @date 16/08/2022
 * @param {(number | string)} num
 * @return {*}  {number}
 */
export const getVwUnit = (num: number | string): string => {
  if (typeof num === 'string') {
    return `${(getNumber(num) / window.screen.width) * 100}vw`
  }
  return `${(num / window.screen.width) * 100}vw`
}

/**
 * @description px转vw-不带单位
 * @date 16/08/2022
 * @param {(number | string)} num
 * @return {*}  {string}
 */
export const getToVw = (num: number | string): number => {
  if (typeof num === 'string') {
    return (getNumber(num) / window.screen.width) * 100
  }
  return (num / window.screen.width) * 100
}

/**
 * @description 小数转换为百分比
 * @date 26/09/2022
 * @param {number} point
 * @param {number} [fixed=1]
 */
export const toPercent = (point: number | string, fixed = 1) => `${(Number(point) * 100).toFixed(fixed)}%`

export const convertCanvasToImage = (canvas: HTMLCanvasElement) => {
  const image = new Image()
  image.src = canvas.toDataURL('image/png')
  return image
}

/**
 * @description 动态导入地图菜单本地图片
 * @date 25/10/2022
 * @param {number} icon
 */
export const getLabelIcon = (icon: number, suffix = 'svg') =>
  new URL(`../assets/svg/publicity/map/label/${icon}.${suffix}`, import.meta.url).href
