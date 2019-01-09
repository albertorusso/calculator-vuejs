# Alberto Russo - iTechMedia Calculator exercise

## Test overview

1. Build a Calculator written in valid HTML 5, CSS and Javascript.

2. Build PHP functionalities to store all calculator results and to display into a table filter by newest to oldest.

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
1. Clone the repository ```git clone https://github.com/albertorusso/calculator-vuejs.git```
2. ```yarn install``` or ```npm i``` to install all dependency
3. ```yarn run serve``` or ```npm run serve``` to run the server to show the Calculator:
4. ```yarn run serve:web-server``` or ```npm run serve:web-server``` to run the web-server for PHP to save and display all calculations stored
5. ```yarn run serve:storybook``` or ```npm run serve:storybook``` to run storybook to show the web components library ```yarn run serve:storybook``` or ```npm run serve:storybook```

## After the installation and initialization
```
Calculator app is available on http://localhost:8080/
```
```
Storybook is available on http://localhost:8001/
```
```
Web server is available on http://localhost:8083/
All calculation stored are available on http://localhost:8083/calculations
```

**NOTE:** I built a web server in Node.js to consume PHP and make testing easier. However to preserve the original php functionalities I am not passing the `response.Header` to PHP, so **getenv('HTTP_CLIENT_IP')** and **$_SERVER['HTTP_USER_AGENT']** return unknown and not available response, also please make sure you have the right Permission to access/write on `file.csv`.

## How to test all Calculator functionalies?
If you want to test also **HTTP_CLIENT_IP** and **HTTP_USER_AGENT** I recommend to move `web-server/calculator.php`, `web-server/save-calculator.php` and `web-server/utils` folder into an Apache server with PHP and start it.

Calculator has also a configuration file inside `src/config.js` where it is possible to setup the API call to the right path.


## Technologies involved / approach
* Webpack: module bundler.
* Vue.js: build the UI test and all functionalities required.
* Vuex: state management pattern.
* Storybook: build the web components library.
* Atomic design methodology.
* SCSS with BEM syntax.
* Componentisation and Single Responsibility Principle.
* 3rd party libraries implemented:
  * axios to perform ajax requests
  * math-expression-evaluator to evaluate math expressions

### Html5, SCSS and Vue.js
0. Review all requirements and limitations.
1. Investigate on available technologies, examples and libraries to solve specific functionalities.
2. Structure the folder project based on atomic design methodology.
2. Implement storybook and define all web components.
3. Build the calculator layout and connect it to the store.
4. Code review and documentation (Storybook, jsdoc).

### PHP
0. Review all requirements and limitations.
1. Build a basic web server to run PHP rather than use a dedicated Apache server.
2. Implement all PHP functionalities required.
3. Code review and documentation.

## Folder structure

All relevant project files are inside ```/src```, ```/utils``` and ```/web-server``` folder.

- ```/src/config.js``` it is possible to configure the API call. At the moment the end point is `http://localhost:8083/save-calculation`

- ```/src/components``` contains sub folders for atoms, molecules, organisms and pages.

- ```/src/global-styles``` contains the global style and ```/settings``` folder to share all variables (e.g: colors, typography, mixins, ecc.) to all other components.

- ```/src/storeModules``` contains the definition of store split in actions, mutations and store.

- ```/utils``` contains js files.

- ```/web-server``` contains ```server.js``` a simple node server solution to run PHP requests, ```calculator.php```, ```save-calculator.php``` and  ```utils/functions.php``` to execute all functionalies required.

## Time spent to complete the test
5 days working between 3 to 6 hours per day.

## Further development / improvements
* Introduce jest unit tests and snapshot tests for components.
