export default function binder(selectorsAndFunctionsBounds, modulesToPlugIn, runTests = false) {
	if(runTests) var t0 = performance.now();
	const selectorsToFind = Object.keys(selectorsAndFunctionsBounds);
	const foundElementsList = [...document.querySelectorAll(selectorsToFind.join(','))];
	let mergedModules = {};
	if(runTests) {
		let uniqueProps = [];
		modulesToPlugIn.forEach((module, i, arr) => {
			for(let prop in module) {
				if(module.hasOwnProperty(prop)) {
					if(uniqueProps.indexOf(prop) === -1) {
						uniqueProps.push(prop);
					} else {
						console.log(`! doubled property was found: ${prop}`);
					}
				}
			}
			if(i == arr.length - 1) {
				uniqueProps = [];
			}
		});
	}
	mergedModules = Object.assign(...modulesToPlugIn);
	selectorsToFind.forEach(selector => {
		const selectorType = selector.slice(0,1).toLowerCase();
		if(foundElementsList.some(element => {
			switch(selectorType) {
				case '.': return (` ${element.className} `).indexOf(` ${selector.slice(1)} `) > -1;
				case '#': return element.id.indexOf(selector.slice(1)) > -1;
				case '[': return element.hasAttribute(selector.slice(1,-1));
				default:  return (element.tagName.toLowerCase()).indexOf(selector) > -1;
			}})
		) {
			if(runTests) console.log(`+ ${selector} --> ${selectorsAndFunctionsBounds[selector].join(', ')}`);
			selectorsAndFunctionsBounds[selector].forEach(script => {
				if(mergedModules.hasOwnProperty([script])) {
					mergedModules[script]();
				} else {
					console.log(`! ${script}: script name wasn't found`);
				}
			});
		} else {
			if(runTests) console.log(`- ${selector}`);
		}
	});
	if(runTests) var t1 = performance.now();
	if(runTests) console.log("Binder html parsing took " + (t1 - t0) + " milliseconds.");
}
