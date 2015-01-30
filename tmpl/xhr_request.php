<?php

$first_index   = $_POST['last_post'] + 1;
$posts_to_load = $_POST['posts_to_load'];

$array_return = array();
$num = 0; 

$pics = array('ex-1', 'ex-2', 'ex-3', 'ex-4', 'ex-5');

for ($i = $first_index; $i < $first_index + $posts_to_load; $i++) {
		shuffle($pics);

		$post_block = '
			<div class="project_block clearfix">
				<h2 class="section_title">Projekt ' . $i . '</h2>
				
				<div class="splited_content clearfix">
					<div class="splited_content__item clearfix">
						
						<div class="proyect_pics grid-3 clearfix">
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="http://www.youtube.com/embed/j6cxZp4ii6c" class="iframe group1 cboxElement">
									<img src="img/examples/' . $pics[0] . '.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/' . $pics[1] . '.jpg" class="group1 cboxElement">
									<img src="img/examples/' . $pics[1] . '.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/' . $pics[2] . '.jpg" class="group1 cboxElement">
									<img src="img/examples/' . $pics[2] . '.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/' . $pics[3] . '.jpg" class="group1 cboxElement">
									<img src="img/examples/' . $pics[3] . '.jpg" class="w-all">
								</a>
							</div>
							<div class="proyect_pics__items subgrid-3 overflow-hidden hoverable clickable">
								<a href="img/examples/' . $pics[4] . '.jpg" class="group1 cboxElement">
									<img src="img/examples/' . $pics[4] . '.jpg" class="w-all">
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
		';		

	$post_block .= '<!-- end of content__section services -->';

	$array_return[$num] = $post_block;
	$num++;

}

$arr = array_values($array_return);
echo json_encode($arr);



?>