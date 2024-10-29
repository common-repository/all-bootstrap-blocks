<?php  
$styles = '

';
?>
<?php if ( $styles ) : ?>
	<style><?php echo areoi_minify_css( $styles ) ?></style>
<?php endif; ?>

<div class="container h-100 position-relative">
	<div class="row h-100 align-items-center justify-content-between">
		
		<div class="col-lg-6 col-xxl-5 <?php echo lightspeed_get_attribute( 'alignment', 'start' ) == 'end' ? 'order-lg-1' : '' ?>">
			
			<?php lightspeed_heading( 2 ) ?>

			<div class="row justify-content-center justify-content-lg-start">
				<div class="col col-md-10">

					<?php lightspeed_introduction() ?>

					<?php lightspeed_cta() ?>

					<?php lightspeed_contact() ?>
				</div>
			</div>
		</div>

		<?php if ( lightspeed_get_attribute( 'form_id', null ) ) : ?>
			<div class="col-lg-6 areoi-hero-media areoi-form <?php lightspeed_attribute( 'heading_color', lightspeed_get_default_color( 'text' ) ) ?>">
				<div class="h1 d-lg-none"></div>
				<?php if ( !empty( $_GET['context'] ) && $_GET['context'] == 'edit' ) : ?>
					<div class="areoi-form-placeholder <?php echo lightspeed_get_default_color( 'bg' ) ?>">
						<?php lightspeed_square_spacer() ?>
						<p class="<?php echo lightspeed_get_default_color( 'text', lightspeed_get_default_color( 'bg' ) ) ?>">Your form will be displayed here.<br>
						Preview your page to view the live form.</p>
					</div>
				<?php else : ?>
					<?php Ninja_Forms()->display( absint( lightspeed_get_attribute( 'form_id', null ) ), true ); ?>
				<?php endif; ?>
			</div>
		<?php endif; ?>
	
	</div>
</div>

<?php //lightspeed_stretched_link() ?>