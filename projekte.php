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

			<div class="project_block clearfix">
				<h2 class="section_title">Projekt <?php echo $i; ?></h2>
				
				<div class="splited_content clearfix">
					<div class="splited_content__item clearfix">
						
						<div class="proyect_pics grid-3 clearfix">
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="http://www.youtube.com/embed/j6cxZp4ii6c" class="iframe <?php echo 'group' . $i; ?> cboxElement">
									<img src="img/examples/<?php echo $pics[0]?>.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/<?php echo $pics[1]?>.jpg" class="group1 cboxElement">
									<img src="img/examples/<?php echo $pics[1]?>.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/<?php echo $pics[2]?>.jpg" class="group1 cboxElement">
									<img src="img/examples/<?php echo $pics[2]?>.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/<?php echo $pics[3]?>.jpg" class="group1 cboxElement">
									<img src="img/examples/<?php echo $pics[3]?>.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/<?php echo $pics[4]?>.jpg" class="group1 cboxElement">
									<img src="img/examples/<?php echo $pics[4]?>.jpg" class="w-all">
								</a>
							</div>
						</div>

					</div>

					<div class="splited_content__item feat__block clearfix">
						<div class="feat__content clearfix">					
							<p>
								Wir planen ihre Stahlkonstruktionen für: 
								Chemieanlagen, Hüttenwerke, Kraftwerke, Zementwerke, Förderanlagen, Kokereien, Umwelttechnik, Sonderkonstruktionen, Versammlungsbauten, Sportstätten, Hallenbau.
								Leistungen für den Industrie- und Hochbau:
							</p>
							<ul>
								<li>Beratung bei Projektgrundlagenerstellung</li>
								<li>Eigenverantwortliche Problemlösungen bei Projekterstellung</li>
								<li>Problemlösung von Bauherrenaufgaben</li>
								<li>Problemlösung von Objektplanungsaufgaben</li>
								<li>Problemlösung von Anlagenplanungsaufgaben</li>
								<li>Berücksichtigung von Fertigungsvorgaben</li>
								<li>Baustellenüberwachung</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<?php endfor; ?>

		</div>
	</div> 
</div>

<?php include_once('tmpl/footer.php'); ?>


		
