# kendo-systemjs
 A test for kendo scrolling bug with ES6 modules and SystemJS+Babel.

###The Bug
The bug is that when using KendoUI widgets with ES6 modules, those widgets' pop-up elements become detached from their respective controls as you scroll down the web page.  This example uses the Kendo DatePicker comment, but it also happens with the Kendo Dropdown control and the filter boxes that you get on the Kendo Grid control (available on Professional, paid-for version of Kendo only).

The bug occurs on IE 11 and Firefox.  It does not happen on Chrome.


With IE scrolled to the top of the screen the control works correctly, with the calendar pop-up attached to the control:
![Kendo control works](http://www.users.on.net/~mikeandgeminoz/code/images/kendo_es6_scrollingbug1.png "Kendo control works")

Scroll the screen down just a little, and the control's pop-up becomes detached from its control:
![Kendo control doesn't work](http://www.users.on.net/~mikeandgeminoz/code/images/kendo_es6_scrollingbug2.png "Kendo control doesn't work")


###Possible Causes
It looks to me that Kendo is not even picking up that the window has scrolled at all, and is placing its pop-up in the same place it would if the browser was still scrolled to the top.

I think that this might be somehow related to to Kendo's hard dependency on jQuery.  Specifically, how Kendo expects jQuery to be available as global object, attached to the browser's own global, i.e. the _window_ object.  My guess is that because of that, Kendo is not properly picking up the scrolling event.


###Environment
The code in this repository uses Node/npm to install its dependencies.  Setup instructions are:

1. Install [Node/npm](https://nodejs.org/en/download/) if you don't have it already.  For Windows, you'll also need a bash shell, which you get if you install [Github for Windows] (https://desktop.github.com/) (make sure you tick the box to install the shell).
1. In a bash window, git clone this repository.
1. cd to the repository folder, then issue `npm install` to download the dependencies.
1. Extract your Kendo-Pro files to a folder called "kendo-pro" in the root of your project.  NB: KendoUI Pro is not free, but there is trial version available from Telerik at https://www.telerik.com/download-trial-file/v2/kendo-ui.  I used version 2016.1.112.commercial for my testing.
1. Open the file src/index.html in your browser from a local web server, e.g. http://localhost:8082/kendo-systemjs/src/index.html.  I use SublimeServer for SublimeText as my local web server, but there's a bazillion others you can use.

###Further Notes
My code uses Babel to transpile ES6 modules into ES5.  I've tried to follow the Telerik documentation at http://docs.telerik.com/kendo-ui/third-party/systemjs, although that uses CommonJS style requires rather than ES6/Babel.  Is that the problem, maybe?

The problem also occurs if I use Webpack to transpile in a build step.  (SystemJS transpiles in the browser.)  I've set up a [separate Github repository to test this problem with Webpack](https://github.com/brownieboy/kendo-webpack-bugtest)


###Update 08/03/2016 - Bug Found!
This turned out to be a bug in the version of jQuery that I was using, version 2.20.  This is not a supported version of jQuery for Kendo, as it says on the [JavaScript Prerequisites page on Telerik's site](http://docs.telerik.com/kendo-ui/intro/installation/prerequisites), (slaps self in forehead for not reading this first!).

Changing the version of jQuery from 2.2.0 back down to 2.1.4 solved the problem.



