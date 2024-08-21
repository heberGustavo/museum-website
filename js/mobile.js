let burger = document.getElementById('burger'),
	nav = document.getElementById('main-nav'),
	containerMobile = document.getElementById('container-mobile');

$(document).ready(function () {
	var widthPage = window.innerWidth;
	if (widthPage <= 991) {
		$("header .container-menu-mobile").removeClass("d-none");
	}
});

burger.addEventListener('click', function (e) {
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
	containerMobile.classList.toggle('hv100');
});

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function (e) {
	slowmo.dispatchEvent(clickEvent);
	burger.dispatchEvent(clickEvent);

	setTimeout(function () {
		burger.dispatchEvent(clickEvent);

		setTimeout(function () {
			slowmo.dispatchEvent(clickEvent);
		}, 3500);
	}, 5500);
});