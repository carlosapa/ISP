/*=== set equal the heights of the splitted content ===*/

var set_heights = (function (win, doc, $) {
	
	var parents = $('.splited_content:not(.js_not_equal)');
	
	var getter = (function (els) {
		var top_height = 0;
		els.each(function (i, e) {
			var height = $(e).height();
			top_height = (height > top_height) ? height : top_height;
		});	
		return top_height;
	});

	var setter = (function (els, h) {
		els.each(function (i, e) {
			$(e).css('height', h + 'px');
		});
	});

	var _init = (function () {
		parents.each(function(i, e) {
			var items = $(e).find('.splited_content__item');
			var height = getter(items);
			setter(items, height);
		});		
	})

	//onload
	_init();

	//onresize
	$(win).on('resize', function () {
		_init();		
	});
	
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

	if ($('.cboxElement').length > 0) {

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

		//localisation: 

		jQuery.extend(jQuery.colorbox.settings, {
			current: "Bild {current} von {total}",
			previous: "Zurück",
			next: "Vor",
			close: "Schließen",
			xhrError: "Dieser Inhalt konnte nicht geladen werden.",
			imgError: "Dieses Bild konnte nicht geladen werden.",
			slideshowStart: "Slideshow starten",
			slideshowStop: "Slideshow anhalten"
		});

		$(cboxOverlay).on('click', function () { return false; });
	}

}(window, document, jQuery));

/*=== Smooth scrolling to anchors ===*/

var smooth_anchors = (function (win, doc, $) {

	var trigger = '.anchor_jump';
	var anchors = $(trigger);
	var smooth_scrooll_to = function (hash_tag) {
	
		if (location.hash !== '') {

			var hash = location.hash.replace('#_', '');
			var target = $('a[name="' + hash + '"]');
			
			if (target.length) {
				
				$(win).on('DOMContentLoaded', function (e) {	
					window.setTimeout( function () {
						$('html,body').animate({ scrollTop: target.offset().top - 100 }, 1500, 'easeInOutQuad', null); 
						return false; 
					}, 400);

				});
			}			
		}
	};

	//on load
	smooth_scrooll_to(location.hash);

	anchors.each(function (ind, elem) {

		$(elem).on('click touchstart', function (ev) {
			
			ev.preventDefault();
			
			var anchor_hash = $(this).attr('href');
			var anchor_hash_position = anchor_hash.indexOf('#');

			if (anchor_hash_position < 0) return false;

			var anchor_hash_tag = anchor_hash.substring(anchor_hash_position + 1);
			var url = anchor_hash.substring(0, anchor_hash_position);

			//is in page or in another page

			if ($('a[name="' + anchor_hash_tag + '"]').length > 0) {
				smooth_scrooll_to(anchor_hash_tag);
			} else {
				win.location.href = url + '#_' + anchor_hash_tag;
			}
		})
	});

}(window, document, jQuery))




