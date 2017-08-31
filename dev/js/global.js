require('../css/style.scss');

import binder from './binder';
import module1 from './functions1';
import module2 from './functions2';

if(dev) {
	if(module.hot) {
		module.hot.accept();
	}
}

let args = [
	// elements to find
	{
		// ex: 'elementToFind': ['correspondingFunctionName','anotherCorrespondingFunctionName']
		'.header': ['func11','func12'],
		'.parent': ['func21','func22'],
	},
	// modules to plug in
	[
		// ex: imported moduleName
		module1,
		module2
	],
	// run binder tests
	false
];

if('ontouchstart' in window) document.body.className += ' touch';

binder(...args);





// var {hi, event} = require('./messages');
// import Button from './button';
// import {multiply} from './math';

// // isTouch


// var {hi, event} = require('./messages');
// import Button from './button';
// import {multiply} from './math';



// var appHolder = document.createElement('div');
// appHolder.id = 'app';
// document.body.appendChild(appHolder);

// var newMessage = () => (`<p>${hi}, ${event}</p>`);
// var newButton = () => (Button.button);
// var newMath = () => (multiply(3,2));


// var app = document.querySelector('#app');
// app.innerHTML = dev ? newMath() : newButton();

// if(dev) {
// 	console.log('dev');
// } else {
// 	console.log('prod');
// }

// // Button.attachEl();

// console.log('test3');


// function getComponent() {
// 	return import('lodash').then(_ => {
// 		var element = document.createElement('div');
// 		element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// 		return element;
// 	}).catch(error => 'An error occurred while loading the component');
// }

// getComponent().then(component => {
// 	document.body.appendChild(component);
// });

