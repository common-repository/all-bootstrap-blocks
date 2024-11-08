<?php  
$styles = '
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media .carousel {
	height: 100%;
    width: 100%;
}
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media .carousel-indicators {
	bottom: 75px !important;
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
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block {
	padding: 0;
}
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block > div.container > .row,
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block > div.container-fluid > .row {
	height: ' . lightspeed_get_attribute( 'size', '100vh' ) . ';
}
';
?>
<?php if ( $styles ) : ?>
	<style><?php echo areoi_minify_css( $styles ) ?></style>
<?php endif; ?>

<div class="container-fluid h-100 areoi-parallax-none">
	<div class="row">

		<div class="col areoi-hero-media h-100 p-0">
			
			<?php lightspeed_media_carousel( lightspeed_get_attribute( 'gallery', array() ), 'rectangle' ) ?>
		</div>
	
	</div>
</div>