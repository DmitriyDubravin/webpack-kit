require("../css/main.scss");

import binder from "./binder";
import constants from "./constants";
import * as common from "./common";
import * as module1 from "./module1";
import * as moduleN from "./moduleN";

// import $ from 'jquery';

import "slick-carousel";

// treeshaking test
import {unusedFunction} from "./helpers";

let args = [
    {
        "html": constants,
        "body": [common.init, common.resize, common.detectTouch],
        ".header": "module1",
        "#about": [moduleN.aboutFunction],
        "#text-block": module1.fillTextBlock,
        "[data-contact]": [moduleN.contactFunction],
        ".carousel": [module1.carousel],
        ".header": [module1.navFunction],
    },
    // true
];

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
binder(...args);
