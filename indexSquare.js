let $square = document.querySelector('.square');

let i = 0;
let step = 1;

$square.addEventListener('click', () => {
	
	setInterval(() => {
		if(i <= 0) {
			step = 1;
		} else if(i >= window.innerWidth - 100) {
			step = -1;
		}
		i += step;
		$square.style.left = i + 'px';
	}, 1);

});