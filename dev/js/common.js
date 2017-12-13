import {say, delay} from "./helpers";

export const isTouch = false;

export function detectTouch() {
    if("ontouchstart" in window) {
        document.body.className += " touch";
        this.isTouch = true;
    }
}

export function init() {
    say("window was loaded");
    // this.detectTouch();
    // say(`is touch: ${this.isTouch}`);
}

export function resize() {
    window.onresize = () => {
        delay(500, say, "window was resized");
    };
}
