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

/*=== init anythingslider for the jumbotron slider ===*/

var init_slider = (function (win, doc, $) {

	$('.slider_items').anythingSlider({
		expand: true,
		resizeContents: true,
		buildArrows: false,
		buildNavigation: false,
 		buildStartStop: false, 
 		infiniteSlides: true,
 		hashTags: false,
 		animationTime: 800, 
	});

	// build custom arrows
	var next_arr = $('.slider_next > img');
	var back_arr = $('.slider_back > img');
	var slider = $('.slider_items').data('AnythingSlider');


	next_arr.on('click touchstart', function (e) {
		slider.goForward(true);
	});

	back_arr.on('click touchstart', function (e) {
		slider.goBack(true);
	});

	// build custom navigation
	var navi_items = $('.slider_navi_item');

	navi_items.each(function (i, e) {
		$(e).on('click touchstart', function (ev) {
			var index = $(ev.target).closest('.slider_navi_item').attr('data-slider-panel');
			slider.gotoPage(index, true, function (slider) {
				actualizeNavi(index-1)
			}, 0);
		})
	});

	$('.slider_items').bind('slide_complete', function (e, slider) {
		var index = slider.currentPage;
		actualizeNavi(index-1);
	})

	var actualizeNavi = function (i) {
		navi_items.each(function () {
			$(this).removeClass('active');
		});
		navi_items.eq(i).addClass('active');
	};


}(window, document, jQuery));


/*=== init colorbox ===*/

var init_colorbox = (function () {

	var project_box = $('.proyect_pics');
	var project_length = project_box.length;

	for (var i = 1; i < project_length; i++) {

		$('.group' + i).colorbox({
			rel:'group' + i, 
			transition:"elastic",
			width:"70%", 
			height:"70%"
		});

		// youtube and vimeo
		$('.iframe.group' + i).colorbox({
			rel:'group' + i, 
			transition:"elastic",
			iframe:true,
			width:"70%", 
			height:"70%"
		});
	}

}(window, document, jQuery));










