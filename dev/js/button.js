const Button = {
	button: '<button id="myButton" class="button">Press me!</button>',
	attachEl: () => {
		document.getElementById('myButton').addEventListener('click', () => {
			console.log('clicked');
		});
	}
};

export default Button;