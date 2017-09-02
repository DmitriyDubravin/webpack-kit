require('../css/style.scss');

import binder from './binder';
import tools from './tools';
import common from './common';
import module1 from './module1';
import moduleN from './moduleN';

if(dev) {
	if(module.hot) {
		module.hot.accept();
	}
}

let args = [
	// elements to find & functions to execute if element was found
	{
		'body': ['init', 'resize'],
		'.header': ['navFunction', 'searchFunction', 'errorNameFunction'],
		'.about': ['aboutFunction'],
		'.contact': ['contactFunction'],
	},
	// modules to plug in
	[
		tools,
		common,
		module1,
		moduleN
	],
	// run binder tests
	// true
];

binder(...args);