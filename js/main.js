/*=== set equal the heights of the splitted content ===*/

var set_heights = (function (win, doc, $) {
	
	var items = $('.splited_content__item');
	var top_height = 0;

	var getter = function () {
		items.each(function (i, e) {
			var height = $(e).height();
			top_height = (height > top_height) ? height : top_height;
		});		
	};

	var setter = function () {
		items.each(function (i, e) {
			$(e).css('height', top_height + 'px');
		});
	};

	//onload
	getter();
	setter();

	//onresize
	$(win).on('resize', function () {
		getter();
		setter();		
	})





}(window, document, jQuery));
