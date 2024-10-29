<?php
$the_query = lightspeed_get_posts();

$styles = '

';
?>
<?php if ( $styles ) : ?>
	<style><?php echo areoi_minify_css( $styles ) ?></style>
<?php endif; ?>

<div class="container h-100 position-relative">
	<div class="row h-100 align-items-center">

		<div class="col">

			<div class="row mb-4">
				<div class="col-lg-6 col-xxl-5 text-center text-lg-start <?php echo lightspeed_get_attribute( 'alignment', 'start' ) == 'end' ? 'offset-lg-6' : '' ?>">
					
					<?php lightspeed_heading( 2 ) ?>

					<?php lightspeed_introduction() ?>

					<?php lightspeed_cta() ?>
				</div>
			</div>

			<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 <?php echo lightspeed_get_attribute( 'alignment', 'start' ) == 'end' ? 'justify-content-end' : '' ?>">
				
				<?php $post_count = 0; while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
					<div class="col mb-4 position-relative areoi-has-url">
						<?php if ( !empty( lightspeed_get_attribute( 'media_position', null ) ) && lightspeed_get_attribute( 'media_position', null ) == 'background' ) : ?>
							<?php lightspeed_item_with_background( null, true ) ?>
						<?php else : ?>
							<?php lightspeed_item( null, true ) ?>
						<?php endif; ?>						
					</div>
				<?php $post_count++; endwhile; ?>

			</div>

			<?php lightspeed_post_pagination( $the_query ) ?>

		 	<?php wp_reset_postdata(); ?>

		</div>
	
	</div>
</div>