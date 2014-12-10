<?php include_once('tmpl/header.php'); ?>
<?php include_once('tmpl/head-main.php'); ?>

<div class="section clearfix w-all line-top big-space-after">
	<div class="section__holder clearfix w-1080 div-center">
		
		<div class="section_title">
			<h1>Dienstleistungen</h1>
		</div>
		
		<div class="section_body w-all">

			<?php for ($i = 0; $i < 6; $i++) : ?>
			<div class="content__section medium-space-before medium-space-after clearfix">
				<h2 class="section_title">Konstruktion</h2>
				<div class="splited_content clearfix">
					
					<div class="splited_content__item w-25 to-left bleed-right">
						<div class="services relative">
							<div class="services_image w-all h-all hoverable">
								<img src="img/rad_ph02.jpg" alt="" class="w-all">
							</div>
						</div>
					</div>

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
				</div>
			</div><!-- end of service -->
			<?php endfor; ?>

		</div>
	</div> <!-- end of content__section services -->


		</div>

	</div>
</div>

<?php include_once('tmpl/footer.php'); ?>
