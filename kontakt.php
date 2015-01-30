<?php include_once('tmpl/header.php'); ?>
<?php include_once('tmpl/head-main.php'); ?>

<div class="section clearfix w-all line-top big-space-after">
	<div class="section__holder clearfix w-1080 w-fixed div-center">
		
		<div class="section_title">
			<h1>Kontakt</h1>
		</div>
		
		<div class="section_body w-60">
			<p><strong>Ingenieurgesellschaft für Stahlbauplanung GmbH</strong></p>
			<p>Schwarzmühlenstr. 104<br/>
			45884 Gelsenkirchen</p>
			<p>
			<span class="icon icon-phone-alt"></span>Telefon: (02 09) 91 374-0<br/>
			<span class="icon icon-print"></span>Telefax: (02 09) 91 374-74<br/>
			<span class="icon icon-envelope"></span>info@isp-stahlbauplanung.de</p>
		</div>

		<div class="section_body w-60">
			<h3>Kontakieren Sie uns</h3>
			
			<form>
				<div class="form_block clearfix">
					
					<div class="form_input form_input--text">
						<label>Name und Vorname:</label>
						<input type="text" class="input--text" name="text" placeholder="Name eingeben">
						<div class="input_descriptions">...</div>
					</div>
					
					<div class="form_input form_input--text">
						<label>Emailadresse:</label>
						<input type="text" class="input--text" name="text" placeholder="Emailaddresse eingeben">
						<div class="input_descriptions">...</div>
					</div>

					<div class="form_input form_input--text w-50 to-left bleed-right">
						<label>Telefonnummer:</label>
						<input type="text" class="input--text" name="text" placeholder="Telefonnummer eingeben">
						<div class="input_descriptions">...</div>
					</div>

					<div class="form_input form_input--text w-50 to-right bleed-left">
						<label>Firma:</label>
						<input type="text" class="input--text" name="text" placeholder="Telefonnummer eingeben">
						<div class="input_descriptions">...</div>
					</div>

					<div class="form_input form_input--textarea">
						<label>Textarea:</label>
						<textarea>Nachricht eingeben</textarea>
						<div class="input_descriptions"></div>
					</div>
					
					<div class="form_input form_input--submit to-right">
						<input type="submit" class="input--text" name="text" value="Senden">
					</div>
				</div>
			</form>
		</div>

		<div class="section_body w-60">
			<h3>Finden Sie uns</h3>
			<div id="map" class="w-all h-150"></div>
		</div>

	</div>
</div>

<?php include_once('tmpl/footer.php'); ?>

