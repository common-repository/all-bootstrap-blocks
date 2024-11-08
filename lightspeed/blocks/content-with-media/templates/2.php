<?php  
$styles = '
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media {
	position: relative;
}
@media only screen and (min-width: ' . get_option( 'areoi-layout-grid-grid-breakpoint-lg', '992px' ) . ') {
	#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media {
		height: 100%;
		position: absolute;
		top: 0;
		' . (lightspeed_get_attribute( 'alignment', 'start' ) == 'end' ? 'left' : 'right') . ': 0;
	}
	#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media .carousel {
		height: 100%;
	    width: 100%;
	    object-fit: cover;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate( -50%, -50% );
	}
	#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media .carousel-inner,
	#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media .carousel-item {
		height: 100%;
	}
	#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media .carousel-item img,
	#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media .carousel-item video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media .carousel-indicators {
		bottom: 75px;
	}
}
';
?>
<?php if ( $styles ) : ?>
	<style><?php echo areoi_minify_css( $styles ) ?></style>
<?php endif; ?>

<div class="container h-100">
	<div class="row h-100 align-items-center justify-content-between <?php echo lightspeed_get_attribute( 'alignment', 'start' ) == 'end' ? 'justify-content-lg-end' : '' ?>">
		
		<div class="col-lg-6 col-xxl-5 text-center text-lg-start <?php echo lightspeed_get_attribute( 'alignment', 'start' ) == 'end' ? 'order-lg-1' : '' ?> position-relative">
			
			<?php lightspeed_heading( 2 ) ?>

			<?php lightspeed_introduction() ?>

			<?php lightspeed_content_items() ?>

			<?php lightspeed_cta() ?>
		</div>

		<?php if ( !empty( lightspeed_get_attribute( 'gallery', array() ) ) ) : ?>
			<div class="col-lg-6 areoi-hero-media areoi-parallax-none">
				<div class="h1 d-lg-none"></div>
				
				<?php lightspeed_media_carousel( lightspeed_get_attribute( 'gallery', array() ) ) ?>
			</div>
		<?php endif; ?>
	
	</div>
</div>

<?php //lightspeed_stretched_link() ?>