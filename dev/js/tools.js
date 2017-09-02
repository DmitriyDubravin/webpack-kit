export default {
    isTouch: false,
    detectTouch() {
        if('ontouchstart' in window) {
            document.body.className += ' touch';
            this.isTouch = true;
        }
    },
    // globalFunctionSumm: (x,y) => x + y,
	// turnOffPreloader(preloaderBodyClass) {
	// 	document.body.className = document.body.className.split(' ').filter(cls => cls !== preloaderBodyClass).join(' ');
    // },
    say(msg) {
		console.log(msg);
	},
    delay(delay, func, args) {
        setTimeout(() => {
            func(args);
        }, delay);
    },
};