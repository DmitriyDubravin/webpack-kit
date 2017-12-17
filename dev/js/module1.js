import {say, delay} from "./helpers";


export function navFunction() {
    say("navFunction executed");
    this.body.css({background: "gray"});
    this.sparedFunction();
}

export function fillTextBlock() {
    $("#text-block").html("dynamic text3");
    this.anotherSparedFunction();
}

export function carousel() {
    say("carousel executed");
    $(".carousel").slick();
}
