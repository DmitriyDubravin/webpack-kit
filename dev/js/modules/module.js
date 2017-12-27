// runs at once on all pages because of bound with 'body' selector
export function init() {
    console.log("window was loaded");
    // we can use constants anywhere via this.constantName
    this.body.css({background: "gray"});
    console.log(`is touch: ${this.isTouch}`);
}

// runs at once on all pages because of bound with 'body' selector
export function resize() {
    window.addEventListener("resize", () => {
        setTimeout(() => {
            console.log("window was resized");
        }, 500);
    });
}

// runs only on about page because of bound with '#about' selector
export function aboutFunction() {
    console.log("aboutFunction executed");
}

// runs only on contact page because of bound with '[data-contact]' selector
export function contactFunction() {
    console.log("contactFunction executed");
}

// this is special object. its purpose to create inside "binder" functions that are not executed at once, but can be executed any time later
export var staticFunctions = {
    sparedFunction() {
        // this function won't run, but can be executed by demand via this.spareFunction()
        console.log("spareFunction executed");
    },
    anotherSparedFunction(arg) {
        // This function won't run, but can be executed by demand via this.anotherSpareFunction()
        console.log(`anotherSpareFunction executed with args: ${arg}`);
    }
};

// runs on every page because of bound with .header selector
export function navFunction() {
    console.log("navFunction executed");
    // we can use our static functions anywhere via this.functionName
    this.sparedFunction();
}

// runs anywhere, where .carousel selector can be found
export function carousel() {
    console.log("carousel executed");
    // we can use global imports as usual
    $(".carousel").slick();
    // execute another static function here
    this.anotherSparedFunction("9");
}
