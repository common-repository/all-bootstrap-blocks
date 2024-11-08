<?php 
$the_query = lightspeed_get_posts();

$styles = '
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media {
	position: relative;
}
@media only screen and (min-width: ' . get_option( 'areoi-layout-grid-grid-breakpoint-lg', '992px' ) . ') {
	#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .areoi-hero-media {
		position: absolute;
		' . (lightspeed_get_attribute( 'alignment', 'start' ) == 'end' ? 'left' : 'right') . ': 0
	}
}
';
?>
<?php if ( $styles ) : ?>
	<style><?php echo areoi_minify_css( $styles ) ?></style>
<?php endif; ?>

<div class="container h-100">
	<div class="row h-100 align-items-center">

		<div class="col-lg-6 col-xxl-5 text-center text-lg-start position-relative <?php echo lightspeed_get_attribute( 'alignment', 'start' ) == 'end' ? 'offset-lg-6 offset-xxl-7' : '' ?>">
			
			<?php lightspeed_heading( 2 ) ?>

			<?php lightspeed_introduction() ?>

			<?php lightspeed_cta() ?>
		</div>

		<div class="col-12 col-lg-6  p-0 areoi-hero-media <?php echo lightspeed_get_attribute( 'alignment', 'start' ) == 'end' ? '' : 'offset-xxl-1' ?>">
			<div class="h1 d-lg-none"></div>
			<div class="areoi-drag-container">
				<ul class="align-items-start">
					<?php $post_count = 0; while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
						<li class="position-relative areoi-has-url">
							<?php if ( !empty( lightspeed_get_attribute( 'media_position', null ) ) && lightspeed_get_attribute( 'media_position', null ) == 'background' ) : ?>
								<?php lightspeed_item_with_background( null, true ) ?>
							<?php else : ?>
								<?php lightspeed_item( null, true ) ?>
							<?php endif; ?>	
						</li>
					<?php $post_count++; endwhile; ?>

					<?php wp_reset_postdata(); ?>
				</ul>
			</div>
		</div>
	
	</div>
</div>