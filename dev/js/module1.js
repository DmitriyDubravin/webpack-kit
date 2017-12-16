import {say, delay} from "./helpers";


export function navFunction() {
    say("navFunction executed");
    this.body.css({background: "gray"});
    this.ss();
}

export function fillTextBlock() {
    $("#text-block").html("dynamic text3");
}

export function carousel() {
    say("carousel executed");
    $(".carousel").slick();
}
