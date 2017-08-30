require('../css/style.scss');
// require('../html/home.html');
// require('../html/about.html');
// require('../html/contact.html');

import func from './functions';

var {hi, event} = require('./messages');
import Button from './button';
import {multiply} from './math';



if(dev) {
	if(module.hot) {
		module.hot.accept();
	}
}


let tests = true;

let elementsToFind = [];
let wasFound = {};

let bound = {
	// 'elementToFind': ['correspondingFunction','anotherCorrespondingFunction']
	'.header': ['test'],
};
for(var key in bound) {
	if(bound.hasOwnProperty(key)) elementsToFind.push(key);
}

function plugInScripts(module) {
	elementsToFind.forEach(function(selector) {
		if(wasFound[selector]) {
			if(tests) console.log(`+ ${selector} --> ${bound[selector]}`);
			bound[selector].forEach(script => {
				module[script]();
			});
		} else {
			if(tests) console.log(`- ${selector}`);
		}
	});
}

function binder(elementsToFind, modulesToPlugIn) {

	// let wasFound = {};
	elementsToFind.forEach((selector, index, arr) => {
		const selectorType = selector.slice(0,1).toLowerCase();
		const isFound = [...document.querySelectorAll(elementsToFind.join(','))].some(element => {
			if(selectorType === '.') { // if class
				return (` ${element.className} `).indexOf(` ${selector.slice(1)} `) > -1;
			} else if(selectorType === '#') { // if id
				return element.id.indexOf(selector.slice(1)) > -1;
			} else if(selectorType === '[') { // if data-attribute
				return element.hasAttribute(selector.slice(1,-1));
			} else {
				return (element.tagName).indexOf(selector) > -1;
			}
			// console.log(element); // too many elementst? learn 'some' method ???
		});
		wasFound[selector] = isFound;
		if(index === arr.length - 1) {
			plugInScripts(modulesToPlugIn); // callback
		}
	});
	// return wasFound;
}

function checkFuncionSpeed(f, fArgs) {
	let t0 = performance.now();
	let result = f(fArgs);
	let t1 = performance.now();
	console.log("Elements were found in " + (t1 - t0) + " milliseconds.");
	return result;
}

// let wasFound = binder(elementsToFind);
// let wasFound = checkFuncionSpeed(binder, elementsToFind);
binder(elementsToFind, func);

// isTouch
if('ontouchstart' in window) document.body.className += ' touch';














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

