class Tool {
  //时分秒转化为秒
  static formatToS(val: string) {
    let value = String(val)
    let h = Number(value.slice(0, 2))
    let m = Number(value.slice(3, 5))
    let s = Number(value.slice(6, 8))

    return h * 60 * 60 + m * 60 + s
  }
}

export default Tool
