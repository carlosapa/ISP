
/*=== header navigation subnavi OBJECT ===*/
/* dependencies: jquery */

var Header_toggle = function () {
	var self = this;

	this.toggle = $('.head_toogle');
	this.navi = $('.head_navi');
	this.opened = false;

	this.toggle.on('touchstart', (function (e) {
		if (!self.opened) {
			$(this).addClass('toggle_opened');
			self.navi.addClass('toggle_opened');
			self.opened = true;

			$(window).trigger('open_mobile_header');

		} else {
			$(this).removeClass('toggle_opened');
			self.navi.removeClass('toggle_opened');
			self.opened = false;

			$(window).trigger('close_mobile_header');
		}
	}));
};

var header = new Header_toggle();


/*=== header navigation subnavi ===*/
/* dependencies: jquery, smartresize */

var header_subnavi = (function (win, doc, $) {
	'use strict'; 
	
	/* priv vars */
	var $navi = $('nav.head_navi'),
		navi = 'nav.head_navi',
		$navi_li = $navi.find('.head_navi__list_item'),
		navi_li = '.head_navi__list_item',
		$navi_li_span = $navi_li.find('.list_item__name'),
		navi_li_span = '.list_item__name',
		$navi_li_mask = $navi_li.find('.head_subnavi__list-mask'),
		navi_li_mask = '.head_subnavi__list-mask',
		$navi_sublist = $navi_li_mask.find('.head_subnavi__list'),
		navi_sublist = '.head_subnavi__list',
		$navi_subli = $navi_sublist.find('.head_subnavi__list_item'),
		navi_subli = '.head_subnavi__list_item',
		$navi_subli_span = $navi_subli.find('.sublist_item__name'),
		navi_subli_span = '.sublist_item__name',
		mobile_class = '.mobile';

	/* methods */
	var open_submenu = function (list_item) {
		list_item.addClass('opened');
		list_item.find(navi_sublist).addClass('opened');

		if (is_mobile) {

			list_item.find(navi_li_mask).css({
				'height': list_item.find(navi_sublist).innerHeight() + 0 + 'px'
			});
		}

		clearTimeout(timeOut);
		menu_open = true;
	};

	var close_submenu = function (list_item) {
		list_item.removeClass('opened');
		list_item.find(navi_sublist).removeClass('opened');

		if (is_mobile) {

			list_item.find(navi_li_mask).css({
				'height': ''
			});
		}

		clearTimeout(timeOut);
		menu_open = false;
	};

	var hasChild = function (parent) {
		if (parent.find(navi_sublist).length > 0) {
			return true;
		} else {
			return false;
		}
	};

	var convert_into_mobile = function (mobile) {
		if (mobile) {
			$navi.addClass('mobile');
			$navi_li_span.addClass('mobile');
		} else {
			$navi.removeClass('mobile');
			$navi_li_span.removeClass('mobile');
		}	
	};

	/* public vars */
	var menu_open = false;
	var active_list_old = null;
	var timeOut = null;
	var close_delay = 2000;

	var _mobile = function (win) {
		if (isMobile.any() !== null) {
			convert_into_mobile(true);
			return true;
		} else {
			convert_into_mobile(false);
			return false;
		}
	}

	//onload
	var is_mobile = _mobile(window.innerWidth);
	var is_mobile_old = _mobile(window.innerWidth);

	//onresize
	$(window).smartresize(function () {
		var is_mobile = _mobile($(this).innerWidth);
		if (is_mobile !== is_mobile_old) {
			$(window).trigger('change_menu_class');
		} 
		is_mobile_old = _mobile($(this).innerWidth);
	});

	
	/* events on desktop */
	$navi_li_span.not(mobile_class).each(function (index, span) {

		$(span).on({
			mouseenter: function (event) {
				var active_list = $(this).closest(navi_li);
				var has_child = hasChild(active_list);
			
				//highlight parent 
				active_list.addClass('hovered');
				
				if (menu_open) {
					close_submenu(active_list_old);
				}

				if (has_child) {
					open_submenu(active_list);
				}

				active_list_old = $(this).closest(navi_li);
			}, 

			mouseout: function (event) {
				var active_list = $(this).closest(navi_li);

				//highlight parent 
				active_list.removeClass('hovered');
			}
		});
	});


	$navi.not(mobile_class).each(function (index, navi) {
		$(navi).on({
			mouseleave: function () {
				var active_list = $navi_li.filter('.opened');
				
				clearTimeout(timeOut);
				if (menu_open) {
					timeOut = setTimeout(function () {					
						close_submenu(active_list);
					}, close_delay);
				}		
			},

			mouseenter: function () {
				if (menu_open)
				clearTimeout(timeOut);
			}
		}); 
	});


	/* events on mobile */
	$navi_li_span.filter(mobile_class).each(function (index, span) {

		//add open-close icons
		if (hasChild($(span).closest(navi_li))) {
			$(span).closest(navi_li).addClass('hasChild');
		}

		//attach events
		$(span).on({
			
			touchstart: function (event) {
				event.preventDefault();
				
				// which one was clicked
				var active_list = $(this).closest(navi_li);
				var has_child = hasChild(active_list);

				// si el menu está abierto
				if (menu_open) {
					// y has tocado el mismo boton que estaba abierto
					if (active_list.is(active_list_old)) {
						//cierra el acordeon
						close_submenu(active_list);
						active_list.removeClass('hovered');
					//si has tocado otro
					} else {
						// cierra el que esté abierto y abre el nuevo si tiene hijos
						if (has_child) {
							close_submenu(active_list_old);
							active_list_old.removeClass('hovered');
							open_submenu(active_list);
							active_list.addClass('hovered');
						} else {
							//si no los tiene, ve al link...
							//go out...
							window.location.href = active_list.find('a').attr('href');find
						}
					}

				} else {
					//si el menu esta cerrado
					if (has_child) {
						//y el boton tocado tiene hijos
						open_submenu(active_list);
						active_list.addClass('hovered');
					} else {
						// si no los tiene...
						//go out...
						window.location.href = active_list.find('a').attr('href');
					} 
				}

				active_list_old = $(this).closest(navi_li);
			}
		});

	});	

	$(window).on('change_menu_class', function () {

	});

}(window, document, jQuery));



/*=== set equal the heights of the splitted content ===*/

var set_heights = (function (win, doc, $) {

	'use strict'; 
	
	var parents = $('.splited_content:not(.js_not_equal)');
	var responsive_limit = 900;
	
	var getter = (function (els) {
		var top_height = 0;
		els.each(function (i, e) {
			var height = $(e).outerHeight();
			top_height = (height > top_height) ? height : top_height;
		});	
		return top_height;
	});

	var setter = (function (els, h) {
		els.each(function (i, e) {
			$(e).css('height', '');
			$(e).css('height', h + 'px');
		});
	});

	var _init = (function () {
		parents.each(function(i, e) {
			var items = $(e).find('.splited_content__item');
			var height = getter(items);
			setter(items, height);
		});		
	});

	var _reset = (function () {
		parents.each(function(i, e) {
			var items = $(e).find('.splited_content__item');
			items.each(function (i, e) {
				$(e).css('height', '');
			});
		});		
	});

	//onload
	if ($(win).width() > responsive_limit) { _init(); }
	

	//onresize
	$(win).on('resize', function () {
		var w_width = $(win).width();
		if (w_width > responsive_limit) { _init(); }	else {
			_reset();
		}	
	});
	
//}(window, document, jQuery));
});
set_heights(window, document, jQuery);



/*=== init owlslider for the jumbotron slider ===*/

var caroussel_init = (function ($) {
	if ($('.slider_items').length < 1)
		return false;

	$('.slider_items').owlCarousel({
		items: 1,
		singleItem: true,
		addClassActive: true,
		navigation : true,
		navigationText: ["<i class='icon-chevron-left icon-white'><</i>", "<i class='icon-chevron-right icon-white'>></i>"],
    	itemsDesktop : false,
		itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile: false,
		autoPlay: 4000,
	});

	var owl = $('.slider_items').data('owlCarousel');
	var owl_length = owl._items.length - 1;
	var owl_current = function () {
		return owl._current;
	}

	var left_btn = $('.slider_navigation--left');
	var right_btn = $('.slider_navigation--right');

	left_btn.on('click', function (e) {
		if (owl_current() !== 0) {
			owl.prev();
		} else {
			/*console.log('a ultimo')
			owl.trigger('to.owl.carousel', [owl_length, 300]);*/
		}
	});

	right_btn.on('click', function (e) {
		if (owl_current() < owl_length) {
			owl.next();
		} else {
			/*console.log('a 0')
			owl.trigger('to.owl.carousel', [0, 300]);*/
		}
	});


}(jQuery));


/*=== init colorbox in projects page ===*/

var init_colorbox = (function (w, d, $) {
	'use strict'; 

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
	}
});

//init_colorbox(window, document, jQuery);

/*=== Smooth scrolling to anchors ===*/

var smooth_anchors = (function (win, doc, $) {
	'use strict'; 

	var trigger = '.anchor_jump';
	var anchors = $(trigger);
	
	var smooth_scrooll_to = function (hash_tag) {
		
		if (location.hash !== '') {
			console.log('hola');
			var hash = location.hash.replace('#_', '');
			var target = $('a[name="' + hash + '"]');
			
			if (target.length) {
				
				$(win).on('DOMContentLoaded', function (e) {	
					window.setTimeout( function () {
						$('html,body').animate({ scrollTop: target.offset().top - 100 }, 1500, 'easeInOutQuad', null); 
						location.hash = '';
						return false; 
					}, 200);

				});
			}			
		} else {
			var target = $('a[name="' + hash_tag + '"]');
			if (target.length) {
				$('html,body').animate({ scrollTop: target.offset().top - 100 }, 1500, 'easeInOutQuad', null); 
				location.hash = '';
				return false; 
			}
		}
	};

	//on load
	smooth_scrooll_to(location.hash);

	anchors.each(function (ind, elem) {

		$(elem).on('click', function (ev) {
			
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
				//win.location.href = url + '#_' + anchor_hash_tag;
				var href = url + '#_' + anchor_hash_tag;
				window.link_properly_in_mobile(href, ev.target);
			}
		})
	});

}(window, document, jQuery));

/*--- Fixbug: Avoid get to linked URL on touchstart but on touchend*/

var link_properly_in_mobile = (function (url, element) {
		
	//isMobile is a snippet defined in plugins.js
	if (isMobile.any !== null) {
		var clickable = true;

		$(document).on('touchmove', function () {
			clickable = false;
		});
		
		//$(element).on('click touchstart', function () {
			if (clickable) {
				window.location.href = url;
			}
		//});
	}

});


/*=== Load new posts onscroll ===*/

var infinite_scroll = (function (win, doc, $) {
	'use strict';

	var object_to_append_to = $('.section_body');
	var load_already = 1;

	if (!$('body').hasClass('projekte')) return false;

	$(win).on('scroll', function (e) {
		if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			request_new_posts(7, 10);
		}
	});

	var request_new_posts = function (_in, _how) {
		
		if (load_already <= 0) return false;

		var ajax = $.ajax({
			type: 'POST',
			url: 'tmpl/xhr_request.php',
			data: { last_post: _in, posts_to_load: _how }
		})

		.success( function (data) {
			var obj = $.parseJSON(data);
			window.setTimeout(function() {
				for (var i in obj) {
					$(obj[i]).appendTo(object_to_append_to);
				}

				init_colorbox(window, document, jQuery);
				set_heights(window, document, jQuery);

			}, 500);
			load_already--;
		});
	};

}(window, document, jQuery));


/*=== Show menu dropdown ===*/

var show_menu = (function (win, doc, $) {

	var menu = $('.head_navigation__responsive');
	var toggle = $('.navigation__toggle');
	var classes = ['in', 'out'];
	var animating = false;

	toggle.on('click', function (e) {

		if (!animating) {

			if (menu.hasClass(classes[0])) {
				menu.toggleClass(classes[0]);
				menu.toggleClass(classes[1]);
				animating = true;
			
			} else if (menu.hasClass(classes[1])) {
				menu.toggleClass(classes[1]);
				menu.toggleClass(classes[0]);
				animating = true;
			
			} else {
				menu.addClass(classes[0]);
				animating = true;
			}

		}

	});

	menu.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
		animating = false;
	})

}(window, document, jQuery));


/*--- Diensleistungen Open Close Text ---*/
/* --> GOTCHA
div.service_block
	div.service_block--text 
		div.main_content
			{content...}
			div.secondary_content
				div.secondary_content__holder 
				{secondary content...}
			div.button
				span.text
				span.icon
*/


var dienstleistungen_toogle = (function () {

	var service_block = $('.service_block'),
		service_block_text = service_block.find('.service_block__item--text'),
		toggle_classes = ['closed', 'opened'],
		toggle_button = service_block.find('div.button');

	service_block_text.each(function (i, el) {
		$(el).addClass(toggle_classes[0]);
	});

	var open_service = (function (button, block) {

		block.removeClass(toggle_classes[0]);
		block.addClass(toggle_classes[1]);

		button.find('span.text').text(button.data('open'));

		var cl_secondary_content_height = block.find('.secondary_content__holder').innerHeight();
		block.find('.secondary_content').css({
			'max-height': cl_secondary_content_height + 45  +'px'
		});
	});

	var close_service = (function (button, block) {

		block.removeClass(toggle_classes[1]);
		block.addClass(toggle_classes[0]);

		button.find('span.text').text(button.data('close'));
		block.find('.secondary_content').css({
			'max-height': '0px'
		});
	});

	toggle_button.each(function (i, el) {

		$(el).on('click' ,function (e) {
			var block = $(this).closest(service_block_text);
			if (block.hasClass(toggle_classes[0])) {
				open_service($(this), block);

			} else if (block.hasClass(toggle_classes[1])) {
				close_service($(this), block);
			}
		});
	});
}());




