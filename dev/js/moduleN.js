import {say, delay} from "./helpers";


export function aboutFunction() {
    say("aboutFunction executed");
}

export function contactFunction() {
    say("contactFunction executed");
}

export function sss() {
    console.log(2);
    this.ss = function() {
        console.log(1);
    };
}
