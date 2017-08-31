require('../css/style.scss');
// require('../html/home.html');
// require('../html/about.html');
// require('../html/contact.html');

import binder from './binder';
import func from './functions';
import func2 from './functions2';

// var {hi, event} = require('./messages');
// import Button from './button';
// import {multiply} from './math';



if(dev) {
	if(module.hot) {
		module.hot.accept();
	}
}

binder(
	// element to find
	{
		// ex: 'elementToFind': ['correspondingFunctionName','anotherCorrespondingFunctionName']
		'.header': ['test'],
	},
	// modules to plug in
	[
		// ex: imported moduleName
		func,
		func2
	],
	// run binder tests
	true
);


function checkFuncionSpeed(f, fArgs) {
	let t0 = performance.now();
	let result = f(fArgs);
	let t1 = performance.now();
	console.log("Elements were found in " + (t1 - t0) + " milliseconds.");
	return result;
}

// // let wasFound = binder(elementsToFind);
// // let wasFound = checkFuncionSpeed(binder, elementsToFind);
// binder(elementsToFind, func);

// // isTouch
// if('ontouchstart' in window) document.body.className += ' touch';














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
