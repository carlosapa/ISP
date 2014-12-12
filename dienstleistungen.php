<?php include_once('tmpl/header.php'); ?>
<?php include_once('tmpl/head-main.php'); ?>

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

<div class="section clearfix w-all line-top big-space-after">
	<div class="section__holder clearfix w-1080 w-fixed div-center">
		
		<div class="section_title">
			<h1>Dienstleistungen</h1>
		</div>
		
		<div class="section_body w-all">

			<?php for ($i = 0; $i < 6; $i++) : ?>
			<div class="content__section medium-space-before medium-space-after clearfix">
				<h2 class="section_title"><?php echo $titles[$i]; ?></h2>
				<a name="<?php echo $titles[$i]; ?>"></a>
				<div class="splited_content clearfix">
					
					<div class="splited_content__item w-25 to-left bleed-right">
						<div class="services  w-all h-all relative">
							<div class="services_image w-all h-all">
								<img src="<?php echo $srcs[$i]; ?>" alt="" class="w-all">
							</div>
						</div>
					</div>

					<?php if ($i % 3 === 0) : ?>
					<div class="splited_content__item w-75 to-right bleed-left bg_grey">
						<ul class="content_list bleed-inside">
							<li class="content_list__items">ISP ist 27 Jahre im Segment Stahlbauplanung tätig</li>
							<li class="content_list__items">20 qualifizierte Mitarbeiter und Mitarbeiterinnen</li>
							<li class="content_list__items">27 Jahre Erfahrung eines modernen Büros ein umfangreiches Leistungssortiment</li>
							<li class="content_list__items">Die technische Ausstattung mit 20 CAD Arbeitsplätzen und zugehöriger </li>
							<li class="content_list__items">Software für Statik, Planung und Konstruktion</li>
							<li class="content_list__items">Mitgliedschaften zum Vorteil unserer Kunden</li>
							<li class="content_list__items">Beratende Ingenieure IK Bau NW</li>
							<li class="content_list__items">Deutscher Stahlbauverband</li>
						</ul>
					</div>

					<?php elseif ($i % 3 === 1) :?>
					<div class="splited_content__item w-75 to-right bleed-left bg_grey">
						<h3 class="">Quis nostrud</h3>
						<p class="">Laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
						<ul class="content_list bleed-inside">
							<li class="content_list__items">Software für Statik, Planung und Konstruktion</li>
							<li class="content_list__items">Mitgliedschaften zum Vorteil unserer Kunden</li>
							<li class="content_list__items">Beratende Ingenieure IK Bau NW</li>
							<li class="content_list__items">Deutscher Stahlbauverband</li>
						</ul>
					</div>
					<?php else :?>
					<div class="splited_content__item w-75 to-right bleed-left bg_grey">
						<h3 class="">Quis nostrud</h3>
						<ul class="content_list bleed-inside">
							<li class="content_list__items">Software für Statik, Planung und Konstruktion</li>
							<li class="content_list__items">Mitgliedschaften zum Vorteil unserer Kunden</li>
						</ul>
						<h3>Voluptatem sequi nesciunt</h3>
						<p class="talign_justify">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
						<p class="talign_justify">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. </p>
					</div>
					<?php endif; ?>
				
				</div>
			</div><!-- end of service -->
			<?php endfor; ?>

		</div>
	</div> <!-- end of content__section services -->


		</div>

	</div>
</div>

<?php include_once('tmpl/footer.php'); ?>
