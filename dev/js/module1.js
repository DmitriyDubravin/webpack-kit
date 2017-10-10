import {say, delay} from './helpers';

export default {
	navFunction() {
		console.log('navFunction execute');
	},
	galleryFunction() {
		console.log('galleryFenction executed');
		$('.gallery').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3
		});
	},
	fillTextBlock() {
		$('#text-block').html('dynamic text3');
	}
};