import {say, delay} from "./helpers";


export function init() {
    say("window was loaded");
    say(`is touch: ${this.isTouch}`);
}

export function resize() {
    window.addEventListener("resize", () => {
        delay(500, say, "window was resized");
    });
}
