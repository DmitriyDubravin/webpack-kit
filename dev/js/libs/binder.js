
// v.2.1

export default function binder(selectorsAndFunctionsBounds, runTests = false) {
    let t0, t1;
    if (runTests) t0 = performance.now();
    // polyfill for ".matches()" method
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector;
    }
    // gather all selectors in array
    const selectorsToFind = Object.keys(selectorsAndFunctionsBounds);
    // find selectors in document
    const foundElements = [...document.querySelectorAll(selectorsToFind.join(","))];
    // filter bounds for not founded selectors
    let filteredBounds = {};
    for (let key in selectorsAndFunctionsBounds) {
        if (foundElements.some(element => element.matches(key))) {
            filteredBounds[key] = selectorsAndFunctionsBounds[key];
        } else {
            if (runTests) console.log(`- ${key} was not found`);
        }
    }
    // gather all modules in one object
    let mergedModules = {};
    for (let bound in filteredBounds) {
        let module = filteredBounds[bound];
        let nature = Object.prototype.toString.call(module);
        if (nature === "[object Array]") {
            module.forEach(script => {
                if (Object.prototype.toString.call(script) === "[object Function]") {
                    mergedModules[script.name] = script;
                    mergedModules[script.name]();
                } else {
                    mergedModules = {...mergedModules, ...script};
                }
            });
        } else if (nature === "[object Object]") {
            mergedModules = {...mergedModules, ...module};
        } else if (nature === "[object Function]") {
            mergedModules[module.name] = module;
            mergedModules[module.name]();
        } else {
            console.log("! unsupported format: ", module);
        }
    }
    if (runTests) console.log("binderResultObject: ", mergedModules);
    if (runTests) t1 = performance.now();
    if (runTests) console.log("Binder html parsing took " + (t1 - t0) + " milliseconds.");
}



// v.2.0

// export default function binder(selectorsAndFunctionsBounds, runTests = false) {
//     let t0, t1;
//     if (runTests) t0 = performance.now();
//     // polyfill for ".matches()" method
//     if (!Element.prototype.matches) {
//         Element.prototype.matches = Element.prototype.msMatchesSelector;
//     }
//     // gather all selectors in array
//     const selectorsToFind = Object.keys(selectorsAndFunctionsBounds);
//     // find selectors in document
//     const foundElements = [...document.querySelectorAll(selectorsToFind.join(","))];
//    // filter bounds for not founded selectors
//    let filteredBounds = {};
//    for (let key in selectorsAndFunctionsBounds) {
//        if (foundElements.some(element => element.matches(key))) {
//            filteredBounds[key] = selectorsAndFunctionsBounds[key];
//        } else {
//            if (runTests) console.log(`- ${key} was not found`);
//        }
//    }
//    // gather all modules in one object
//    let mergedModules = {};
//    for (let bound in filteredBounds) {
//        let module = filteredBounds[bound];
//        let nature = Object.prototype.toString.call(module);
//        if (nature === "[object Array]") {
//            module.forEach(script => {
//                if (Object.prototype.toString.call(script) === "[object Function]") {
//                    mergedModules[script.name] = script;
//                } else {
//                    mergedModules = Object.assign(...mergedModules, script);
//                }
//            });
//        } else if (nature === "[object Object]") {
//            mergedModules = Object.assign(...mergedModules, module);
//        } else if (nature === "[object Function]") {
//            mergedModules[module.name] = module;
//        } else {
//            console.log("! unsupported format: ", module);
//        }
//    }
//    if (runTests) console.log("binderResultObject: ", mergedModules);
//    // run all functions
//    for (let key in mergedModules) {
//        if (Object.prototype.toString.call(mergedModules[key]) === "[object Function]") {
//            mergedModules[key]();
//        }
//    }
//    if (runTests) t1 = performance.now();
//    if (runTests) console.log("Binder html parsing took " + (t1 - t0) + " milliseconds.");
//}



// v.1.0

// export default function binder(selectorsAndFunctionsBounds, modulesToPlugIn, runTests = false) {
//     let t0, t1;
//     if (runTests) t0 = performance.now();
//     const selectorsToFind = Object.keys(selectorsAndFunctionsBounds);
//     const foundElementsList = [...document.querySelectorAll(selectorsToFind.join(","))];
//     let mergedModules = {};
//     if (runTests) {
//         let uniqueProps = [];
//         modulesToPlugIn.forEach((module, i, arr) => {
//             for (let prop in module) {
//                 if (module.hasOwnProperty(prop)) {
//                     if (uniqueProps.indexOf(prop) === -1) {
//                         uniqueProps.push(prop);
//                     } else {
//                         console.log(`! doubled property was found: ${prop}`);
//                     }
//                 }
//             }
//             if (i == arr.length - 1) {
//                 uniqueProps = [];
//             }
//         });
//     }
//     mergedModules = Object.assign(...modulesToPlugIn);
//     selectorsToFind.forEach(selector => {
//         const selectorType = selector.slice(0,1).toLowerCase();
//         if (foundElementsList.some(element => {
//             switch(selectorType) {
//             case ".": return (` ${element.className} `).indexOf(` ${selector.slice(1)} `) > -1;
//             case "#": return element.id.indexOf(selector.slice(1)) > -1;
//             case "[": return element.hasAttribute(selector.slice(1,-1));
//             default:  return (element.tagName.toLowerCase()).indexOf(selector) > -1;
//             }})
//         ) {
//             if (runTests) console.log(`+ ${selector} --> ${selectorsAndFunctionsBounds[selector].join(", ")}`);
//             selectorsAndFunctionsBounds[selector].forEach(script => {
//                 if (mergedModules.hasOwnProperty([script])) {
//                     mergedModules[script]();
//                 } else {
//                     console.log(`! ${script}: script name wasn't found`);
//                 }
//             });
//         } else {
//             if (runTests) console.log(`- ${selector}`);
//         }
//     });
//     if (runTests) t1 = performance.now();
//     if (runTests) console.log("Binder html parsing took " + (t1 - t0) + " milliseconds.");
// }
