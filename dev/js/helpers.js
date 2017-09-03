export const say = (msg) => {
    console.log(msg);
};

export const delay = (delay, func, args) => {
    setTimeout(() => {
        func(args);
    }, delay);
};

export const detectTouch = () => 'ontouchstart' in window;

export const unusedFunction = () => {
    console.log('I have no use');
};