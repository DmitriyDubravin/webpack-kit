export default function binder(elementsAndFunctionsBounds, modulesToPlugIn, testsToExecute = false) {
	let t0, t1;
	if(testsToExecute) {
		t0 = performance.now();
	}

	// create list of elements to find
	let elementsToFind = [];
	for(var element in elementsAndFunctionsBounds) {
		if(elementsAndFunctionsBounds.hasOwnProperty(element)) {
			elementsToFind.push(element);
		}
	}

	// create a notions object list of found elements
	let wasFound = {};
	elementsToFind.forEach((selector, index, array) => {
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
			// console.log(element); // too many elements? learn 'some' method ???
		});
		wasFound[selector] = isFound;
		if(index === array.length - 1) {
			plugInScripts(modulesToPlugIn); // callback
		}
	});

	// return wasFound;

	function plugInScripts(modules) {
		let mergedModules = Object.assign(...modules);

		elementsToFind.forEach(function(selector, index, array) {
			if(wasFound[selector]) {
				if(testsToExecute) console.log(`+ ${selector} --> ${elementsAndFunctionsBounds[selector]}`);
				elementsAndFunctionsBounds[selector].forEach((script, i, arr) => {
					if(mergedModules.hasOwnProperty([script])) {
						mergedModules[script]();
					} else {
						console.log(`! ${script} script wasn't found`);
					}
				});
			} else {
				if(testsToExecute) console.log(`- ${selector}`);
			}
			if(index === array.length - 1) {
				turnOffPreloader('preloader', 500); // callback
			}
		});
	}

// coockies need

	function turnOffPreloader(preloaderClass, speed = 0) {
		setTimeout(() => {
			document.body.className = document.body.className.split(' ').filter(cls => cls !== preloaderClass).join(' ');
		}, speed);
	}

	if(testsToExecute) {
		t1 = performance.now();
		console.log("Elements were found in " + (t1 - t0) + " milliseconds.");
	}
}