<?php include_once('tmpl/header.php'); ?>
<?php include_once('tmpl/head-main.php'); ?>

<div class="section clearfix w-all line-top big-space-after">
	<div class="section__holder clearfix w-1080 w-fixed div-center">
		
		<div class="section_title">
			<h1>Kontakt</h1>
		</div>
		
		<div class="section_body w-60">
			<h3>Das Unternehmen</h3>
			<p class="talign_justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
		</div>

		<div class="section_body w-60">
			<h3>Kontakiere uns</h3>
			<div class="w-all bg_grey form-area bleed-inside bleed-vertical-tiny clearfix">
				<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="get">
					<div class="w-all">
                        <label for="ex_1">Name und Vorname eingeben</label>
                        <input type="text" name="ex_1" placeholder="Name und Vorname"><br>
                        <span class="form-description">
                            Tiene que insertar un texto
                        </span>
                    </div>

					<div class="w-all">
                        <label for="ex_1">Emailadresse eingeben</label>
                        <input type="text" name="ex_1" placeholder="Emailadresse"><br>
                        <span class="form-description">
                            Tiene que insertar un texto
                        </span>
                    </div>

					<div class="w-all">
                        <label for="ex_1">Nachricht eingeben</label>
                        <textarea name="ex_1" placeholder="Nachricht"></textarea><br>
                        <span class="form-description">
                            Tiene que insertar un texto
                        </span>
                    </div>
				
					<div class="w-all clearfix">
                        <input type="submit" class="w-40 to-right" name="ex_1" disabled><br>
                    </div>	

				</form>
			</div>
		</div>

		<div class="section_body w-60">
			<h3>Finde uns</h3>
			<div id="map" class="w-all h-150"></div>
		</div>

	</div>
</div>

<?php include_once('tmpl/footer.php'); ?>
