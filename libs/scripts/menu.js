var currentGame = 'pb';

function goGame(newGame) {

	if (newGame !== currentGame) {
		$('.menu__item').removeClass('.menu__item--active');
		$('.menu__item')
	}

}

$(function() {

	$('.menu__item').click(function () {
		var newGame = $(this).attr("data-game");
		goGame(newGame)
	})

});
