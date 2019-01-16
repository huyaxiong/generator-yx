function isWechatBrowser () {
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('micromessenger') !== -1
}

function getUrlParams (key) {
  let url = decodeURIComponent(window.location.href)
  var left = url.indexOf('?') + 1
  // var right = url.lastIndexOf('#')
  var parasString = url.slice(left)
  var paras = parasString.split('&')
  var parasjson = {}
  paras.forEach(function (value, index, arr) {
    var a = value.split('=')
    parasjson[a[0]] !== undefined ? parasjson[a[0]] = [].concat(parasjson[a[0]],
      a[1]) : parasjson[a[0]] = a[1]
  })
  let result = arguments[1] !== void 0
    ? (parasjson[arguments[1]] || '')
    : parasjson
  if (key) {
    return (result[key] ? result[key] : '')
  }
  return result
}

export { isWechatBrowser, getUrlParams }
