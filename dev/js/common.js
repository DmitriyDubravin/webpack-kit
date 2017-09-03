import {detectTouch, say, delay} from './helpers';

export default {
    init() {
        say('window was loaded');
        say(`is touch: ${this.isTouch}`);
    },
    resize() {
        window.onresize = () => {
            delay(500, say, 'window was resized');
        };
    }
};