import {say, delay} from "./helpers";

export function navFunction() {
    console.log("navFunction execute");
}

export function fillTextBlock() {
    $("#text-block").html("dynamic text3");
}

export function carousel() {
    $(".carousel").slick();
}
