// todo
// complicated selectors support

export default function binder(selectorsAndFunctionsBounds, runTests = false) {
    let t0, t1;
    if(runTests) t0 = performance.now();


    // gather all selectors in array
    const selectorsToFind = Object.keys(selectorsAndFunctionsBounds);

    // find selectors in document
    const foundSelectors = [...document.querySelectorAll(selectorsToFind.join(","))];


    // gather all modules in one object
    let modulesToPlugIn = [{}];
    for (let selector in selectorsAndFunctionsBounds) {

        let module = selectorsAndFunctionsBounds[selector];
        let nature = Object.prototype.toString.call(module);
        // console.log(nature);
        console.log(nature);
        if(nature === "[object Array]") {
            module.forEach(script => {
                console.log("name: ", script.name);
                modulesToPlugIn.push({[script.name]: script});
            });
        } else if(nature === "[object Object]") {
            for (var script in module) {
                modulesToPlugIn.push(module[script]);
            }
        } else {
            modulesToPlugIn.push(module);
        }







        // modulesToPlugIn.push(selectorsAndFunctionsBounds[selector]);

    }
    console.log("modulesToPlugIn: ", modulesToPlugIn);




    let mergedModules = Object.assign(...modulesToPlugIn);
    console.log("mergedModules: ", mergedModules);
    // if(runTests) {
    //     let uniqueProps = [];
    //     modulesToPlugIn.forEach((module, i, arr) => {
    //         for(let prop in module) {
    //             if(module.hasOwnProperty(prop)) {
    //                 if(uniqueProps.indexOf(prop) === -1) {
    //                     uniqueProps.push(prop);
    //                 } else {
    //                     console.log(`! doubled property was found: ${prop}`);
    //                 }
    //             }
    //         }
    //         if(i == arr.length - 1) {
    //             uniqueProps = [];
    //         }
    //     });
    // }
    selectorsToFind.forEach(selector => {
        const selectorType = selector.slice(0,1).toLowerCase();
        if(foundSelectors.some(element => {
            switch(selectorType) {
            case ".": return (` ${element.className} `).indexOf(` ${selector.slice(1)} `) > -1;
            case "#": return element.id.indexOf(selector.slice(1)) > -1;
            case "[": return element.hasAttribute(selector.slice(1,-1));
            default:  return (element.tagName.toLowerCase()).indexOf(selector) > -1;
            }})
        ) {
            let toExecute = selectorsAndFunctionsBounds[selector];
            let nature = Object.prototype.toString.call(toExecute);
            // console.log(nature);
            if(nature === "[object Array]") {
                if(runTests) console.log(`+ ${selector} --> ${toExecute.map(item => item.name).join(", ")}`);
                toExecute.forEach(script => script());
            } else if(nature === "[object Object]") {
                let scripts = [];
                for (var script in toExecute) {
                    if (toExecute.hasOwnProperty(script)) {
                        toExecute[script]();
                        if(runTests) scripts.push(toExecute[script].name);
                    }
                }
                if(runTests) console.log(`+ ${selector} --> ${scripts.join(", ")}`);
            } else {
                if(runTests) console.log(`+ ${selector} --> ${toExecute.name}`);
                toExecute();
            }

        } else {
            if(runTests) console.log(`- ${selector}`);
        }
    });
    if(runTests) t1 = performance.now();
    if(runTests) console.log("Binder html parsing took " + (t1 - t0) + " milliseconds.");
}


// export default function binder(selectorsAndFunctionsBounds, modulesToPlugIn, runTests = false) {
//     let t0, t1;
//     if(runTests) t0 = performance.now();
//     const selectorsToFind = Object.keys(selectorsAndFunctionsBounds);
//     const foundElementsList = [...document.querySelectorAll(selectorsToFind.join(","))];
//     let mergedModules = {};
//     if(runTests) {
//         let uniqueProps = [];
//         modulesToPlugIn.forEach((module, i, arr) => {
//             for(let prop in module) {
//                 if(module.hasOwnProperty(prop)) {
//                     if(uniqueProps.indexOf(prop) === -1) {
//                         uniqueProps.push(prop);
//                     } else {
//                         console.log(`! doubled property was found: ${prop}`);
//                     }
//                 }
//             }
//             if(i == arr.length - 1) {
//                 uniqueProps = [];
//             }
//         });
//     }
//     mergedModules = Object.assign(...modulesToPlugIn);
//     selectorsToFind.forEach(selector => {
//         const selectorType = selector.slice(0,1).toLowerCase();
//         if(foundElementsList.some(element => {
//             switch(selectorType) {
//             case ".": return (` ${element.className} `).indexOf(` ${selector.slice(1)} `) > -1;
//             case "#": return element.id.indexOf(selector.slice(1)) > -1;
//             case "[": return element.hasAttribute(selector.slice(1,-1));
//             default:  return (element.tagName.toLowerCase()).indexOf(selector) > -1;
//             }})
//         ) {
//             if(runTests) console.log(`+ ${selector} --> ${selectorsAndFunctionsBounds[selector].join(", ")}`);
//             selectorsAndFunctionsBounds[selector].forEach(script => {
//                 if(mergedModules.hasOwnProperty([script])) {
//                     mergedModules[script]();
//                 } else {
//                     console.log(`! ${script}: script name wasn't found`);
//                 }
//             });
//         } else {
//             if(runTests) console.log(`- ${selector}`);
//         }
//     });
//     if(runTests) t1 = performance.now();
//     if(runTests) console.log("Binder html parsing took " + (t1 - t0) + " milliseconds.");
// }
