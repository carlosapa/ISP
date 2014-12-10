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


/*=== init colorbox in projects page ===*/

var init_colorbox = (function (w, d, $) {

	var project_box = $('.proyect_pics');
	var project_length = project_box.length;

	for (var i = 1; i < project_length + 1; i++) {

		$('.group' + i + ', .iframe.group' + i).colorbox({
			rel:'group' + i, 
			transition:"none",
			width:"70%", 
			height:"70%", 
			scrolling: false,
			fixed: true,
			reposition: false,
			onOpen: function (e) {
				$(colorbox).addClass('box_in');
				$(colorbox).removeClass('box_out');
				$(colorbox).on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
					$(colorbox).removeClass('box_in');
				});

				$(cboxOverlay).addClass('fade_in');
				$(cboxOverlay).removeClass('fade_out');
				$(cboxOverlay).on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
					$(colorbox).removeClass('fade_in');
				});
			}, 
			onCleanup: function (e) {
				$(colorbox).addClass('box_out');
				$(colorbox).removeClass('box_in');
				$(colorbox).on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
					$(colorbox).removeClass('box_out');
				});

				$(cboxOverlay).addClass('fade_out');
				$(cboxOverlay).removeClass('fade_in');
				$(cboxOverlay).on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
					$(colorbox).removeClass('fade_out');
				});
			},
			onLoad: function () {
				console.log(this);
			}
		});

		$('.iframe.group' + i).colorbox({
			iframe: true
		});
	
	}

	$(cboxOverlay).on('click', function () {
		return false;
	});

}(window, document, jQuery));










