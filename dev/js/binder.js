export default function binder(elementsAndFunctionsBounds, modulesToPlugIn, testsToExecute = false) {

	// create list of elements to find
	let elementsToFind = [];
	for(var element in elementsAndFunctionsBounds) {
		if(elementsAndFunctionsBounds.hasOwnProperty(element)) {
			elementsToFind.push(element);
		}
	}

	// create a notions object list of found elements
	let wasFound = {};
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
			// console.log(element); // too many elements? learn 'some' method ???
		});
		wasFound[selector] = isFound;
		if(index === arr.length - 1) {
			plugInScripts(modulesToPlugIn); // callback
		}
	});

	// return wasFound;

	function plugInScripts(modules) {
		elementsToFind.forEach(function(selector) {
			if(wasFound[selector]) {
				if(testsToExecute) console.log(`+ ${selector} --> ${elementsAndFunctionsBounds[selector]}`);
				elementsAndFunctionsBounds[selector].forEach(script => {
					modules.forEach(module => {
						module[script]();
					});
				});
			} else {
				if(testsToExecute) console.log(`- ${selector}`);
			}
		});
	}
}