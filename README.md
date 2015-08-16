jQuery Browser detection plugin
================================

A simple and lightweight jQuery plugin for browser detection based on user agent.

Adds a class to the body tag to allow you to use different CSS rules for different browsers.
The returned value can be stored in a variable and used in your code.

Thought specific fetures detection is today recommended (see https://learn.jquery.com/code-organization/feature-browser-detection/), this plugin provides a quick and easy way to solve most browser compatibility issues using CSS.

## Installation

Include the production file after jQuery.

```html
<script src="path/to/jquery-latest-version.js"></script>
<script src="path/to/jquery.browser.detection.min.js"></script>
```

Initialize the plugin.

```javascript
$(document).ready(function() {
	$.browserDetection(true);
});
```

## Usage

### Add a class to the body tag

To add a class containing the browser name to the body tag, pass a "true" argument to the plugin.

```javascript
$.browserDetection(true);
```

Classes added by the plugin contain the browser name: "IE", "Chrome", "Safari", "Firefox", "Opera".
For Internet Explorer an additional class containing the browser version is added. Example: "IE IE10"

```html
<body class="Safari">
```

You can use the browser specific classes to apply different CSS rules for each browser.

```css
.myElement {
	padding-left:0;
}

.Safari .myElement {
	padding-left:10px;
}

.IE .myElement {
	padding-left:20px;
}
```

### Store the returned value in a variable

```javascript
var currentBrowser = $.browserDetection(true);
```

Now you can use the value in your code.

```javascript
switch(currentBrowser) {
	case("IE9"):
	console.log("Update your browser, please!");
	break;
	
	// your code
};
```

### Store the value without adding any classes

To use the returned value without adding a class to the body simply don't pass any argument to the plugin.

```javascript
var currentBrowser = $.browserDetection();
```