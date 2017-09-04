import {say, delay} from './helpers';

export default {
	navFunction() {
		say('navFunction executed');
		$('.gallery').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3
		});
	},
};