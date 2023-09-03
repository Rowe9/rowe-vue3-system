export const getTime = () => {
  let message = ''
  let hour = new Date().getHours()
  if (hour <= 9) {
    message = '上午好'
  } else if (hour <= 14) {
    message = '中午好'
  } else {
    message = '晚上好'
  }
  return message
}
