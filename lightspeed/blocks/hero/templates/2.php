<?php  
$styles = '
@media only screen and (min-width: ' . get_option( 'areoi-layout-grid-grid-breakpoint-lg', '992px' ) . ') {
	#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media {
		margin-top: -' . $padding . 'px;
		margin-bottom: -' . $padding . 'px;
	}
}
';
?>
<?php if ( $styles ) : ?>
	<style><?php echo areoi_minify_css( $styles ) ?></style>
<?php endif; ?>

<div class="container h-100 position-relative">
	<div class="row h-100 align-items-center justify-content-between">
		
		<div class="col-lg-6 col-xxl-5 text-center text-lg-start <?php echo lightspeed_get_attribute( 'alignment', 'start' ) == 'end' ? 'order-lg-1' : '' ?>">
			
			<?php lightspeed_heading( 1 ) ?>

			<div class="row justify-content-center justify-content-lg-start">
				<div class="col col-md-10">

					<?php lightspeed_introduction() ?>

					<?php lightspeed_cta() ?>
				</div>
			</div>
		</div>

		<?php if ( lightspeed_get_attribute( 'video', null ) || lightspeed_get_attribute( 'image', null ) ) : ?>
			<div class="col-lg-6 areoi-hero-media">
				<div class="h1 d-lg-none"></div>
				<div class="areoi-media-col">
					<div class="areoi-media-col-content">
						<?php lightspeed_square_spacer() ?>
						<?php lightspeed_media() ?>
					</div>
				</div>
			</div>
		<?php endif; ?>
	
	</div>
</div>

<?php //lightspeed_stretched_link() ?>