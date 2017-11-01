import {say, delay} from './helpers';

export default {
	navFunction() {
		console.log('navFunction execute');
	},
	fillTextBlock() {
		$('#text-block').html('dynamic text3');
	}
};