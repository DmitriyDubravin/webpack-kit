require("../css/main.scss");

import binder from "./binder";
import constants from "./constants";
import * as common from "./common";
import * as module1 from "./module1";
import {aboutFunction, contactFunction, commonFunctions} from "./moduleN";

// import $ from 'jquery';

import "slick-carousel";

// treeshaking test
import {unusedFunction} from "./helpers";

let dev = process.env.NODE_ENV === "development";

if(dev) {
    if(module.hot) {
        module.hot.accept(err => {
            if(err) {
                // console.error('Cannot apply hot update', err);
            }
        });
    }
}

console.clear();
binder({
    "html": [constants, commonFunctions],
    "body": [common.init, common.resize],
    ".header": [module1.navFunction],
    "#text-block": module1.fillTextBlock,
    ".carousel": module1.carousel,
    "#about": aboutFunction,
    "[data-contact]": contactFunction
},true);
