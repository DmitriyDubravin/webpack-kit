require('../css/style.scss');

import common from './common';
import module1 from './module1';
import moduleN from './moduleN';

if(dev) {
	if(module.hot) {
		module.hot.accept();
	}
}


// treeshaking test
import {say, detectTouch, unusedFunction} from './helpers';


// custom module
let custom = {
	isTouch: false
};
if(detectTouch()) {
	document.body.className += ' touch';
	custom.isTouch = true;
}


let args = [
	// elements to find & functions to execute if element was found
	{
		'body': ['init', 'resize'],
		// '.header': ['navFunction', 'searchFunction', 'errorNameFunction'],
		// '.about': ['aboutFunction'],
		// '.contact': ['contactFunction'],
	},
	// modules to plug in
	[
		custom,
		common,
		module1,
		moduleN
	],
	// run binder tests
	// true
];

import {binder} from './binder';
binder(...args);