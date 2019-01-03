/* eslint-disable */
export default function withBrowserType(Component) {
  if (typeof window !== 'undefined') {
    var isOpera =
      (!!window.opr && !!opr.addons) ||
      !!window.opera ||
      navigator.userAgent.indexOf(' OPR/') >= 0
    var isFirefox = typeof InstallTrigger !== 'undefined'
    var isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function(p) {
        return p.toString() === '[object SafariRemoteNotification]'
      })(
        !window['safari'] ||
          (typeof safari !== 'undefined' && safari.pushNotification)
      )
    var isIE = false || !!document.documentMode
    var isEdge = !isIE && !!window.StyleMedia
    var isChrome = !!window.chrome && !!window.chrome.webstore
    var isBlink = (isChrome || isOpera) && !!window.CSS
    return {
      isOpera,
      isFirefox,
      isSafari,
      isIE,
      isEdge,
      isChrome,
      isBlink
    }
  }
  return null
}
