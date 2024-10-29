<?php  
$styles = '
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media .carousel {
	height: 100%;
    width: 100%;
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

#' . lightspeed_get_block_id() . '.areoi-lightspeed-block > div.container > .row {
	height: calc( ' . lightspeed_get_attribute( 'size', '100vh' ) . ' - 200px );
}
@media only screen and (min-width: ' . get_option( 'areoi-layout-grid-grid-breakpoint-lg', '992px' ) . ') {
	#' . lightspeed_get_block_id() . '.areoi-lightspeed-block > div.container > .row {
		height: calc( ' . lightspeed_get_attribute( 'size', '100vh' ) . ' - ' . get_option( 'areoi-lightspeed-styles-strip-padding', '0' ) * 2 . 'px );
	}
}
';
?>
<?php if ( $styles ) : ?>
	<style><?php echo areoi_minify_css( $styles ) ?></style>
<?php endif; ?>

<div class="container h-100 areoi-parallax-none">
	<div class="row">

		<div class="col areoi-hero-media h-100 position-relative">
			
			<?php lightspeed_media_carousel( lightspeed_get_attribute( 'gallery', array() ), 'rectangle' ) ?>
		</div>
	
	</div>
</div>