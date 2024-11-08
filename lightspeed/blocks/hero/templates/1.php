<?php  
$styles = '
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media {
	margin-bottom: -' . $mobile_padding . 'px;
}
@media only screen and (min-width: ' . get_option( 'areoi-layout-grid-grid-breakpoint-lg', '992px' ) . ') {
	#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media {
		margin-bottom: -' . $padding . 'px;
	}
}
';
?>
<?php if ( $styles ) : ?>
	<style><?php echo areoi_minify_css( $styles ) ?></style>
<?php endif; ?>

<div class="container h-100 position-relative">
	<div class="row h-100 align-items-center text-center">
		<div class="col">

			<div class="row justify-content-center">
				<div class="col-md-10 col-lg-8 col-xl-6">
					
					<?php lightspeed_heading( 1 ) ?>

					<?php lightspeed_introduction() ?>

					<?php lightspeed_cta() ?>
				</div>
			</div>
			
			<?php if ( lightspeed_get_attribute( 'video', null ) || lightspeed_get_attribute( 'image', null ) ) : ?>
				<div class="row justify-content-center areoi-hero-media">
					<div class="col-md-12 col-lg-10 col-xl-8">
						<div class="h1"></div>

						<div class="areoi-media-col">
							<div class="areoi-media-col-content">
								<?php lightspeed_rectangle_spacer() ?>
								<?php lightspeed_media() ?>
							</div>
						</div>
					</div>
				</div>
			<?php endif; ?>
			
		</div>
	
	</div>
</div>

<?php //lightspeed_stretched_link() ?>