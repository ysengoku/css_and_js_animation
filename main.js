document.addEventListener('DOMContentLoaded', () => {
	const door = document.querySelector('.door-wrap');
	let doorL = document.querySelector('.door-l');
	let doorR = document.querySelector('.door-r');

	door.addEventListener('click', () =>{
		doorL.classList.toggle('open');
		if(doorL.classList.contains('open')) {
			doorL.style.transform = 'translate(-50%, -45%) rotateY(-65deg) skewY(-16deg)';
		} else {
			doorL.style.transform = 'translate(-50%, -45%) rotateY(0deg)';
		}

		doorR.classList.toggle('open');
		if(doorR.classList.contains('open')) {
			doorR.style.transform = 'translate(-50%, -45%) rotateY(65deg) skewY(16deg)';
		} else {
			doorR.style.transform = 'translate(-50%, -45%) rotateY(0deg)';
		}
	});
});
