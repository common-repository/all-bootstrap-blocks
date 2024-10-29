<?php  
$styles = '

';
?>
<?php if ( $styles ) : ?>
	<style><?php echo areoi_minify_css( $styles ) ?></style>
<?php endif; ?>

<div class="container h-100 position-relative">
	<div class="row h-100 align-items-center">

		<div class="col">

			<div class="row">
				<div class="col-lg-6 col-xxl-5 <?php echo lightspeed_get_attribute( 'alignment', 'start' ) == 'end' ? 'offset-lg-6' : '' ?>">
					
					<?php lightspeed_heading( 2 ) ?>

					<?php lightspeed_introduction() ?>

					<?php lightspeed_cta() ?>
				</div>
			</div>

			<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 <?php echo lightspeed_get_attribute( 'alignment', 'start' ) == 'end' ? 'justify-content-end' : '' ?>">
				
				<?php foreach ( lightspeed_get_attribute( 'items', array() ) as $item_key => $item ) : ?>
					<div class="col mb-4">
						<?php if ( !empty( lightspeed_get_attribute( 'media_position', null ) ) && lightspeed_get_attribute( 'media_position', null ) == 'background' ) : ?>
							<?php lightspeed_item_with_background( $item ) ?>
						<?php else : ?>
							<?php lightspeed_item( $item ) ?>
						<?php endif; ?>						
					</div>
				<?php endforeach; ?>
			</div>

		</div>
	
	</div>
</div>