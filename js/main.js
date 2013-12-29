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
  console.log('User-perceived page loading time: ' + page_load_time);
}

// Do a localised jsperf

var jsPerfStart = performance.now();
// code for testing
var jsPerfEnd = performance.now();
var jsPerfTime = jsPerfEnd - jsPerfStart;


// navigator.geolocation

// navigator.battery

// Page visibility: document.hidden

// Offline? http://github.hubspot.com/offline/

document.addEventListener('DOMContentLoaded', function() {
  ragadjust('p, li, dd', 'all'); 
});