export default {
    init() {
        this.detectTouch();
        this.say('window was loaded');
    },
    resize() {
        window.onresize = () => {
            this.delay(500, this.say, 'window was resized');
        };
    }
};