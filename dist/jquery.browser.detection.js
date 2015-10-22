/*!
 * jQuery Browser detection plugin v1.1.0
 * jQuery plugin for browser detection 
 *
 * https://github.com/danieledesantis/jquery-browser-detection
 *
 * Released under the MIT License
 * Copyright 2015 Daniele De Santis
 */
(function( $ ) {
	
	 $.extend({
			browserDetection: function ( addClass ) {
				
				var theBody = $('body'),
				    userAgent = window.navigator.userAgent,
				    msieIndex = userAgent.indexOf('MSIE '),
				    currentBrowser,
				    browserClass;
				
				if ( msieIndex !=-1 ) { // IE <= 10
					var ieVersion = userAgent.substring(msieIndex + 5, userAgent.indexOf('.', msieIndex)); // IE version
					currentBrowser = 'IE' + ieVersion;
					browserClass = 'IE ' + currentBrowser;
				} else if ( userAgent.indexOf('Trident/') !=-1 ) { // IE11
					currentBrowser = 'IE11';
					browserClass = 'IE IE11';
				} else if ( userAgent.indexOf('Chrome') != -1 ) {
					if ( userAgent.indexOf('OPR') != -1 ) { // Opera
						currentBrowser = browserClass = 'Opera';
					} else {
						currentBrowser = browserClass = 'Chrome'; // Chrome
					}
				} else if (userAgent.indexOf('Safari') != -1 && userAgent.indexOf('Chrome') == -1) { // Safari
					if ( userAgent.indexOf('CriOS') != -1 ) { // Chrome for iOS
						currentBrowser = browserClass = 'Chrome';
					} else {
						currentBrowser = browserClass = 'Safari';
					}
				} else if ( userAgent.indexOf('Firefox') != -1 ) { // Firefox
					currentBrowser = browserClass = 'Firefox';
				} else {
					currentBrowser = 'notDetected';
					browserClass = '';
				}
				
				if ( addClass ) { // add class
					theBody.addClass(browserClass);
				}
								
				return currentBrowser; // return value
			}
	});
 
}( jQuery ));