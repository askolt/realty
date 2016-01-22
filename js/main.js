$(function() {
	$('.js-drop-link-toggle').on('click', function() {
		$('.js-drop-menu-containaer').toggleClass('drop-menu-containaer_active');
		$('.js-button-primory__triangle').toggleClass('button-primory__triangle_revert');
	});
	$(document).on('click', function(e) {
		if (e.target != $('.js-drop-link-toggle')[0] 
			&& $(e.target).hasClass('js-drop-menu-link') != true 
			&& $(e.target).hasClass('js-button-primory__triangle') != true) {
				$('.js-drop-menu-containaer').removeClass('drop-menu-containaer_active');
				$('.js-button-primory__triangle').removeClass('button-primory__triangle_revert');
		}
	});
	$('.js-big-list__link').on('click', function() {
		$('.js-big-list-container').show();
	});
	$('.big-list-modal__btn-close').on('click', function() {
		$('.js-big-list-container').hide();
	});
})();