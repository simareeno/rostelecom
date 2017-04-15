var currentGame = 'pb';
var currentChoice = 'new';

function resetClasses() {
	$('.menu__item').removeClass('menu__item--active');
	$('.menu__line').removeClass('menu__line--pb menu__line--bns menu__line--l2');
	$('.illustration__game').removeClass('illustration__game--active');
	$('.prizes__list').removeClass('prizes__list--active');
	$('body').removeClass('pb l2 bns');
	$('.welcome .right').removeClass('right--pb right--l2 right--bns');
}

function resetForm() {
	$('.form__menu-item').removeClass('form__menu-item--active');
	$('.fields').removeClass('fields--active');
	$('.form__menu-hl').removeClass('form__menu-hl--new form__menu-hl--old');
}

function goGame(newGame) {
	if (newGame !== currentGame) {
		resetClasses();
		$('.menu__item--' + newGame).addClass('menu__item--active');
		$('.menu__line').addClass('menu__line--' + newGame);
		$('body').addClass(newGame);
		$('.illustration__game--' + newGame).addClass('illustration__game--active');
		$('.welcome .right').addClass('right--' + newGame);
		$('.prizes__list--' + newGame).addClass('prizes__list--active');

		if (newGame == 'bns') {
			$('.game-name').text('Blade & Soul');
		} else if (newGame == 'pb') {
			$('.game-name').text('Point Blank');
		} else {
			$('.game-name').text('Lineage 2');
		}

		currentGame = newGame;
	}
}

function goChoice(formChoice) {
	if (formChoice !== currentChoice) {
		resetForm();
		$('.form__menu-item--' + formChoice).addClass('form__menu-item--active');
		$('.form__menu-hl').addClass('form__menu-hl--' + formChoice);
		$('.fields--' + formChoice).addClass('fields--active');
		currentChoice = formChoice;
	}
}

$(function() {

$(".title__get-button, .title__button").click(function() {
	$('html, body').animate({
		scrollTop: $(".plugin").position().top
	}, 200);
});

	$('.menu__item').click(function () {
		var newGame = $(this).attr("data-game");
		goGame(newGame);
	});

	$('.form__menu-item').click(function () {
		var formChoice = $(this).attr("data-choice");
		goChoice(formChoice);
	});

	return $(".illustration").stick_in_parent();
});
