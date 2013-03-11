// "Modern enough" snippet
// http://caniuse.com/queryselector
// http://caniuse.com/namevalue-storage

var modernBrowser = function () {
  if('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
    return true;
  }
  return false;
};
