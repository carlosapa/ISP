<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
        <script type="text/javascript">

        	/*=== map intializer ===*/
			
			var loadScript = (function (src,callback){
				var script = document.createElement("script");
				script.type = "text/javascript";
				if(callback) script.onload=callback;
				document.getElementsByTagName("head")[0].appendChild(script);
				script.src = src;
			});

			var initialize = (function () {
				var mapOptions = {
					zoom: 15,
					center: new google.maps.LatLng(51.4885741, 7.1316589),
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				map = new google.maps.Map(document.getElementById('map'), mapOptions);
			});

			loadScript('http://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=initialize', function(){});

        </script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->