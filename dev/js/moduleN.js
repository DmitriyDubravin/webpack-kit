import {say, delay} from "./helpers";


export function aboutFunction() {
    say("aboutFunction executed");
}

export function contactFunction() {
    say("contactFunction executed");
}


// this is special function
// its purpose to store inside "binder" functions that are not executed at once, but can be executed any time later
export function commonFunctions() {
    this.sparedFunction = function() {
        console.log("spareFunction: This function won't run, but can be executed by demand via this.spareFunction()");
    };
    this.anotherSparedFunction = function() {
        console.log("anotherSpareFunction: This function won't run, but can be executed by demand via this.spareFunction()");
    };
}
