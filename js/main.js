// "Modern enough" snippet
// http://caniuse.com/queryselector
// http://caniuse.com/namevalue-storage

var modernBrowser = function () {
  if('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
    return true;
  }
  return false;
};

if (modernBrowser()) {

  // dollar selection
  var $ = function(el) {
     return document.querySelectorAll(el);
  };
  // Usage = $('.class');

}

// Consider using load time for best guess about connection
// https://developer.mozilla.org/en-US/docs/Navigation_timing

function logPerceivedLoadTime() {
  var now = new Date().getTime();
  var page_load_time = now - performance.timing.navigationStart;
  console.log('User-perceived page loading time: ' + page_load_time);
}



// Do a localised jsperf
if('performance' in window) {
  var jsPerfStart = performance.now();
  // code for testing
  var jsPerfEnd = performance.now();
  var jsPerfTime = jsPerfEnd - jsPerfStart;
}

var hasNavigator = function() {
  return 'geolocation' in navigator;
};

var hasBattery = function() {
  return 'battery' in navigator;
}


var documentIsHidden = function() {

}

// Page visibility: document.hidden

// Offline? http://github.hubspot.com/offline/

// document.addEventListener('DOMContentLoaded', function() {
//   ragadjust('p, li, dd', 'all'); 
// });