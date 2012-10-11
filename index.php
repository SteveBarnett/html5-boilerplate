<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <title></title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Mobile viewport optimized: h5bp.com/viewport -->
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->
<?php
function auto_version($file)
{
  if(!file_exists($file))
    return $file;
 
  $mtime = filemtime($file);
  return preg_replace('{\\.([^./]+)$}', ".$mtime.\$1", $file);
}
?>
  <!-- Serve basic style.css to everything, enhanced.css to larger screens and IE. Keep html.*ie* for element fixes. -->
  <link rel="stylesheet" href="<?php echo auto_version('stylesheets/style.css') ?>" media="screen, handheld"/>
  <link rel="stylesheet" href="<?php echo auto_version('stylesheets/enhanced.css') ?>" media="screen  and (min-width: 40.5em)"/>
  <!--[if (lt IE 9)&(!IEMobile)]><link rel="stylesheet" href="<?php echo auto_version('stylesheets/ie.css') ?>" /> <![endif]-->
  
  <!-- More ideas for your <head> here: h5bp.com/d/head-Tips -->

  <!-- All JavaScript at the bottom, except this Modernizr build incl. Respond.js
       Respond is a polyfill for min/max-width media queries. Modernizr enables HTML5 elements & feature detects; 
       for optimal performance, create your own custom Modernizr build: www.modernizr.com/download/ -->
  <script src="<?php echo auto_version('js/modernizr.custom.js') ?>"></script>

  <!-- Typekit -->
  <script type="text/javascript">
    (function() {
      var config = {
        kitId: 'XXXXX',
        scriptTimeout: 3000
      };
      var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s)
    })();
  </script>


  <!-- For author information in search results. Add Google+ profile URL. http://support.google.com/webmasters/bin/answer.py?hl=en&answer=1408986 --> 
  <link rel="author" href="" />

</head>

<body>
<!-- "Skip to main content," to id, and tabindex="-1" on target -->
<!-- terrillthompson.com/blog/161 -->
<a href="#main" id="top">Skip to main content</a>

  <header role="banner" id="header">

  </header>
  <div role="main" id="main" tabindex="-1">

  </div>
  <footer role="contentinfo" id="footer">

  </footer>


  <!-- JavaScript at the bottom for fast page loading -->

  <!-- scripts concatenated and minified via build script -->
  <script defer src="<?php echo auto_version('js/script.js') ?>"></script>
  <!-- end scripts -->


  <!-- Asynchronous Google Analytics snippet. Change UA-XXXXX-X to be your site's ID.
       mathiasbynens.be/notes/async-analytics-snippet -->
  <script>
    var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
  </script>

  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
  <!--[if lt IE 7 ]>
    <script defer src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script defer>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->

  <a href="#top">Back to top of page &uarr;</a>

</body>
</html>