# Alberto Russo - iTechMedia Calculator exercise

## Test overview

1. Build a Calculator written in valid HTML 5, CSS and Javascript.

2. Build a web server application written in PHP to store all calculations provided by a user and an info table to show all calculation filter by newest to oldest.

## Front end requirements
* `HTML` frame of the widget as valid HTML5 using CSS flexbox.
* `CSS/SASS` implement the mock-up solution in SASS.
* `Javascript/jQuery`
  * Number functionality.
  * Numbers are selected by mouse clicks and displayed on the calculator header.
  * Operation allowed: Add, minus, divide and multiply.
  * Clear data functionality.

## Server side requirements
* `PHP`
  * When the user clicks the save button on the calculator, the sum will be stored in a
CSV file, along with the user&#39;s IP Address, date it was added and the browser used.
  * Create a new page called &quot;Calculations.php&quot;, convert the CSV file into an array, and output all the info into a table. Should be filtered by newsest to oldest.

## Getting Started
1. Download the repository ```https://github.com/albertorusso/calculator-vuejs.git```
2. Install all dependency ```yarn install``` or ```npm i```
3. Run the server to show the Calculator: ```yarn run serve``` or ```npm run serve```
4. Run storybook to show the web components library ```yarn run serve:storybook``` or ```npm run serve:storybook```

## Technologies involved / approach
* Webpack: module bundler.
* Vue.js: build the UI exercise and all functionalities.
* Storybook: build the web components library.
* Atomic design methodology.
* SCSS with BEM syntax.
* Componentisation and Single Responsibility Principle.
