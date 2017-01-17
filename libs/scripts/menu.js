var currentGame = 'pb';

function resetClasses() {
	$('.menu__item').removeClass('menu__item--active');
	$('.menu__line').removeClass('menu__line--pb menu__line--bns menu__line--l2');
	$('.illustration__game').removeClass('illustration__game--active');
	$('.prizes__list').removeClass('prizes__list--active');
	$('body').removeClass('pb l2 bns');
	$('.welcome .right').removeClass('right--pb right--l2 right--bns');
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
		currentGame = newGame;
	}
}

$(function() {

	$('.menu__item').click(function () {
		var newGame = $(this).attr("data-game");
		goGame(newGame)
	});

	return $(".illustration").stick_in_parent();
});
