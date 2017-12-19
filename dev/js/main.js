require("../css/main.scss");

import binder from "./libs/binder";
import constants from "./modules/constants";
import * as module from "./modules/module";

// import $ from 'jquery';

import "slick-carousel";

// treeshaking test
import {unusedFunction} from "./helpers";

let dev = process.env.NODE_ENV === "development";

if(dev) {
    if(module.hot) {
        module.hot.accept(err => {
            if(err) {
                // console.error("Cannot apply hot update", err);
            }
        });
    }
}

console.clear();
binder({
    "html": [constants, module.staticFunctions],
    "body": [module.init, module.resize],
    ".header": module.navFunction,
    ".carousel": module.carousel,
    "#about": module.aboutFunction,
    "[data-contact]": module.contactFunction
}, true);
