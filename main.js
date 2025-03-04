document.addEventListener('DOMContentLoaded', () => {
	fetch('/header.html')
	.then(response => response.text())
	.then(html => {
		document.getElementById('header-container').innerHTML = html;

		const button = document.getElementById('button');
		const menu = document.getElementById('menu');

		button.addEventListener('click', function() {
			menu.classList.toggle('translate-x-full');
		});
	})
	.catch(error => {
		console.error('Error loading header:', error);
	});
});
