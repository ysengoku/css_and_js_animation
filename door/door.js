// document.addEventListener('DOMContentLoaded', () => {
//     const door = document.querySelector('.door-wrap');
//     let doorL = document.querySelector('.door-l');
//     let doorR = document.querySelector('.door-r');

//     function adjustDoorPosition() {
//         const windowWidth = window.innerWidth;
//         const windowHeight = window.innerHeight;

//         // ドアの位置とサイズをウィンドウのサイズに応じて調整
//         const doorLLeft = 43 - (windowWidth - 768) * 0.01;
//         const doorRLeft = 57 + (windowWidth - 768) * 0.01;
//         const doorTop = 68 - (windowHeight - 800) * 0.01;
//         const doorHeight = 49 - (windowHeight - 800) * 0.01;

//         doorL.style.left = `${doorLLeft}%`;
//         doorL.style.top = `${doorTop}%`;
//         doorL.style.height = `${doorHeight}%`;

//         doorR.style.left = `${doorRLeft}%`;
//         doorR.style.top = `${doorTop}%`;
//         doorR.style.height = `${doorHeight}%`;
//     }

//     adjustDoorPosition();
//     window.addEventListener('resize', adjustDoorPosition);

//     door.addEventListener('click', () => {
//         doorL.classList.toggle('open');
//         if (doorL.classList.contains('open')) {
//             doorL.style.transform = 'translate(-50%, -45%) rotateY(-85deg) skewY(-8deg)';
//         } else {
//             doorL.style.transform = 'translate(-50%, -45%) rotateY(0deg)';
//         }

//         doorR.classList.toggle('open');
//         if (doorR.classList.contains('open')) {
//             doorR.style.transform = 'translate(-50%, -45%) rotateY(85deg) skewY(-8deg)';
//         } else {
//             doorR.style.transform = 'translate(-50%, -45%) rotateY(0deg)';
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
	const door = document.querySelector('.door-wrap');
	let doorL = document.querySelector('.door-l');
	let doorR = document.querySelector('.door-r');

	door.addEventListener('click', () =>{
		doorL.classList.toggle('open');
		if(doorL.classList.contains('open')) {
			doorL.style.transform = 'translate(-50%, -49%) rotateY(-85deg) skewY(-16deg)';
		} else {
			doorL.style.transform = 'translate(-50%, -49%) rotateY(0deg)';
		}

		doorR.classList.toggle('open');
		if(doorR.classList.contains('open')) {
			doorR.style.transform = 'translate(-50%, -49%) rotateY(85deg) skewY(16deg)';
		} else {
			doorR.style.transform = 'translate(-50%, -49%) rotateY(0deg)';
		}
	});
});