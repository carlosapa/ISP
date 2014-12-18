<?php

$first_index   = $_POST['last_post'] + 1;
$posts_to_load = $_POST['posts_to_load'];

$array_return = array();
$num = 0; 

for ($i = $first_index; $i < $first_index + $posts_to_load; $i++) {

	if ($i % 2 === 1) {

		$post_block = '
			<div class="content__section medium-space-after clearfix">
				<h2 class="section_title">Projekt ' . $i . '</h2>
				<div class="splited_content clearfix">
					
					<div class="splited_content__item to-right bleed-left w-40">
						

						<div class="proyect_pics grid-3">
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="http://www.youtube.com/embed/j6cxZp4ii6c" class="iframe group' . $i . ' cboxElement">
									<img src="img/examples/ex-2.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/ex-4.jpg" class="group' . $i . ' cboxElement">
									<img src="img/examples/ex-4.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/ex-5.jpg" class="group' . $i . ' cboxElement">
									<img src="img/examples/ex-5.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/ex-1.jpg" class="group' . $i . ' cboxElement">
									<img src="img/examples/ex-1.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/ex-3.jpg" class="group' . $i . ' cboxElement">
									<img src="img/examples/ex-3.jpg" class="w-all">
								</a>
							</div>
						</div>

					</div>

					<div class="splited_content__item to-left bleed-right bg_grey bleed-inside w-60">
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
			</div>
		</div>
		';
	} else if ($i % 2 === 0){
		$post_block = '
			<div class="content__section medium-space-after clearfix">
				<h2 class="section_title">Projekt ' . $i . '</h2>
				<div class="splited_content clearfix">

					<div class="splited_content__item to-right bleed-left bg_grey bleed-inside w-60">
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
					
					<div class="splited_content__item to-left bleed-right w-40">
						
						<div class="proyect_pics grid-3">
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="http://www.youtube.com/embed/j6cxZp4ii6c" class="iframe group' . $i . ' cboxElement">
									<img src="img/examples/ex-2.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/ex-4.jpg" class="group' . $i . ' cboxElement">
									<img src="img/examples/ex-4.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/ex-5.jpg" class="group' . $i . ' cboxElement">
									<img src="img/examples/ex-5.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/ex-1.jpg" class="group' . $i . ' cboxElement">
									<img src="img/examples/ex-1.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/ex-3.jpg" class="group' . $i . ' cboxElement">
									<img src="img/examples/ex-3.jpg" class="w-all">
								</a>
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>
		';		
	}

	$post_block .= '<!-- end of content__section services -->';

	$array_return[$num] = $post_block;
	$num++;

}

$arr = array_values($array_return);
echo json_encode($arr);



?>