require('../css/style.scss');
require('../html/home.html');
require('../html/about.html');
require('../html/contact.html');

var {hi, event} = require('./messages');
import Button from './button';
import {multiply} from './math';



if(dev) {
	if(module.hot) {
		module.hot.accept();
	}
}


var appHolder = document.createElement('div');
appHolder.id = 'app';
document.body.appendChild(appHolder);

var newMessage = () => (`<p>${hi}, ${event}</p>`);
var newButton = () => (Button.button);
var newMath = () => (multiply(3,2));


var app = document.querySelector('#app');
app.innerHTML = dev ? newMath() : newButton();

if(dev) {
	console.log('dev');
} else {
	console.log('prod');
}

// Button.attachEl();

console.log('test3');


function getComponent() {
	return import('lodash').then(_ => {
		var element = document.createElement('div');
		element.innerHTML = _.join(['Hello', 'webpack'], ' ');
		return element;
	}).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
	document.body.appendChild(component);
});

