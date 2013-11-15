// "Modern enough" snippet
// http://caniuse.com/queryselector
// http://caniuse.com/namevalue-storage

var modernBrowser = function () {
  if('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
    return true;
  }
  return false;
};

// Consider using load time for best guess about connection
// https://developer.mozilla.org/en-US/docs/Navigation_timing

function logPerceivedLoadTime() {
  var now = new Date().getTime();
  var page_load_time = now - performance.timing.navigationStart;
  console.log("User-perceived page loading time: " + page_load_time);
}