# kendo-systemjs
 A test for kendo scrolling bug with SystemJS

##The Bug
The bug is that when using KendoUI widgets with ES6 modules, those widgets' pop-up elements become detached from their respective controls as you scroll down the web page.  This example uses the Kendo DatePicker comment, but it also happens with the Kendo Dropdown control and the filter boxes that you get on the Kendo Grid control (available on Professional, paid-for version of Kendo only).

![Kendo control works](http://www.users.on.net/~mikeandgeminoz/code/images/kendo_es6_scrollingbug1.png "Kendo control works")
![Kendo control doesn't work](http://www.users.on.net/~mikeandgeminoz/code/images/kendo_es6_scrollingbug2.png "Kendo control doesn't work")
