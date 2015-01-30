<?php 

$titles = array(
    'Tragwerks-Plannung', 
    'Statik', 
    'Konstruktion', 
    'Machbarkeitsstudien', 
    'Bauen im Bestand', 
    'Objekt Plannung'
);

$srcs = array(
    'img/foto.jpg', 
    'img/foto-1.jpg', 
    'img/rad_ph02.jpg', 
    'img/dachtraeger3.jpg', 
    'img/dachtraeger2.jpg', 
    'img/dachkonstruktion.jpg'
);

?>
<?php include_once('tmpl/header.php'); ?>
<?php include_once('tmpl/head-main.php'); ?>

<div class="section clearfix w-all line-top big-space-after">
	<div class="section__holder clearfix w-1080 w-fixed div-center">
		
		<div class="section_title">
			<h1>Dienstleistungen</h1>
		</div>
		
		<div class="section_body w-all">

			<?php for ($i = 0; $i < 6; $i++) : ?>
				
				<h2 class="section_title"><?php echo $titles[$i]; ?></h2>
				<a name="<?php echo $titles[$i]; ?>"></a>
				<div class="service_block clearfix">
					
					<div class="service_block__item service_block--pic w-25 to-left bleed-right">
						<div class="services  w-all h-all relative">
							<div class="services_image w-all h-all">
								<img src="<?php echo $srcs[$i]; ?>" alt="" class="w-all">
							</div>
						</div>
					</div><!-- end of service block pic -->

					<div class="service_block__item service_block__item--text feat__block  w-75 to-right bleed-left clearfix">
						<div class="feat__content clearfix">					
							<p>
								Wir planen ihre Stahlkonstruktionen für: 
								Umwelttechnik, Sonderkonstruktionen, Versammlungsbauten.
							</p>
							<ul>
								<li>Beratung bei Projektgrundlagenerstellung</li>
								<li>Eigenverantwortliche Problemlösungen bei Projekterstellung</li>
							</ul>
						</div>

						<div class="secondary_content">
							<div class="secondary_content__holder">
								<h3>Quis nostrud</h3>
								<p>Laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
								<ul>
									<li>Software für Statik, Planung und Konstruktion</li>
									<li>Mitgliedschaften zum Vorteil unserer Kunden</li>
									<li>Beratende Ingenieure IK Bau NW</li>
									<li>Deutscher Stahlbauverband</li>
								</ul>
							</div>
						</div>

						<div class="button" data-open="Einklappen" data-close="Weiterlesen">
							<span class="text">Weiterlesen</span>&nbsp;
							<span class="icon icon-arrow-down"></span>
						</div>							
					</div><!-- end of feat__block -->
					</div><!-- end of service block -->

			<?php endfor; ?>
			
		</div>
	</div> <!-- end of content__section services -->


		</div>

	</div>
</div>

<?php include_once('tmpl/footer.php'); ?>

