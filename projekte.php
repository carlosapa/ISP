<?php $page_type = 'projekte'; ?>
<?php include_once('tmpl/header.php'); ?>
<?php include_once('tmpl/head-main.php'); ?>

<?php

$pics = array('ex-1', 'ex-2', 'ex-3', 'ex-4', 'ex-5');

?>

<div class="section clearfix w-all line-top big-space-after">
	<div class="section__holder clearfix w-1080 w-fixed div-center">
		
		<div class="section_title">
			<h1>Projekte</h1>
		</div>
		
		<div class="section_body w-all">

			<?php for ($i = 1; $i <= 7; $i++) : ?>
			<?php 
				$classes_even = 'splited_content__item to-left bleed-right';
				$classes_odd = 'splited_content__item to-right bleed-left';
				$classes_1 = ($i % 2 == 0) ? $classes_even : $classes_odd;
				$classes_2 = ($i % 2 == 1) ? $classes_even : $classes_odd;

				shuffle($pics);
			?>

			<div class="content__section medium-space-after clearfix">
				<h2 class="section_title">Projekt <?php echo $i; ?></h2>
				<div class="splited_content clearfix">
					
					<div class="<?php echo $classes_1; ?> w-40 splited_content__item_imgs clearfix">
						

						<div class="proyect_pics grid-3 clearfix">
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="http://www.youtube.com/embed/j6cxZp4ii6c" class="iframe <?php echo 'group' . $i; ?> cboxElement">
									<img src="img/examples/<?php echo $pics[0]?>.jpg" class="w-all"/>
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/<?php echo $pics[1]?>.jpg" class="<?php echo 'group' . $i; ?> cboxElement">
									<img src="img/examples/<?php echo $pics[1]?>.jpg" class="w-all"/>
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/<?php echo $pics[2]?>.jpg" class="<?php echo 'group' . $i; ?> cboxElement">
									<img src="img/examples/<?php echo $pics[2]?>.jpg" class="w-all"/>
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/<?php echo $pics[3]?>.jpg" class="<?php echo 'group' . $i; ?> cboxElement">
									<img src="img/examples/<?php echo $pics[3]?>.jpg" class="w-all"/>
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/<?php echo $pics[4]?>.jpg" class="<?php echo 'group' . $i; ?> cboxElement">
									<img src="img/examples/<?php echo $pics[4]?>.jpg" class="w-all"/>
								</a>
							</div>
						</div>

					</div>

					<div class="<?php echo $classes_2; ?> bg_grey bleed-inside w-60">
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
			</div> <!-- end of content__section services -->
			<?php endfor; ?>

		</div>
	</div> 
</div>

<?php include_once('tmpl/footer.php'); ?>
