require('../css/main.scss');

import slick from 'slick-carousel';

import binder from './binder';
import common from './common';
import module1 from './module1';
import moduleN from './moduleN';



// treeshaking test
import {unusedFunction} from './helpers';

let args = [
	// elements to find & functions to execute if element was found
	{
		'body': ['init', 'resize'],
		'.header': ['navFunction', 'errorNameFunction'],
		'#about': ['aboutFunction'],
		'#text-block': ['fillTextBlock'],
		'.gallery': ['galleryFunction'],
		'[data-contact]': ['contactFunction'],
	},
	// modules to plug in
	[
		common,
		module1,
		moduleN
	],
	// run tests
	true
];

if(dev) {
	if(module.hot) {
		module.hot.accept(err => {
			if(err) {
				// console.error('Cannot apply hot update', err);
			}
		});
	}
}

binder(...args);
