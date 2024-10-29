<?php  
$styles = '
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block img,
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block  video {
	width: auto; 
	height:  auto; 
	max-width: ' . lightspeed_get_attribute( 'max_width', '80' ) . '%; 
	max-height: ' . lightspeed_get_attribute( 'max_height', '90' ) . 'px;
}
';
?>
<?php if ( $styles ) : ?>
	<style><?php echo areoi_minify_css( $styles ) ?></style>
<?php endif; ?>

<div class="container h-100 position-relative">
	<div class="row align-items-center">

		<div class="col">

			<div class="row h-100 align-items-center justify-content-between">
				
				<div class="col-lg-6 col-xxl-5 <?php echo lightspeed_get_attribute( 'alignment', 'start' ) == 'end' ? 'order-lg-1' : '' ?>">
					
					<?php lightspeed_heading( 2 ) ?>

					<?php lightspeed_introduction() ?>

					<?php lightspeed_cta() ?>
				</div>
			
			</div>
			
			<div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 justify-content-between">
				<?php foreach ( lightspeed_get_attribute( 'gallery', array() ) as $media_key => $media ) : ?>
					<div class="col mb-4 mt-4 d-flex align-items-center justify-content-center">
						<?php if ( $media['type'] == 'image' ) : ?>
							<img 
								src="<?php echo $media['url'] ?>" 
								alt="<?php echo $media['alt'] ?>" 
								width="<?php echo $media['width'] ?>" 
								height="<?php echo $media['height'] ?>"
							>
						<?php else : ?>
							<video 
								src="<?php echo $media['url'] ?>" 
								muted 
								playsinline 
								autoplay 
								loop 
							></video>
						<?php endif; ?>
					</div>
				<?php endforeach; ?>
			</div>

		</div>
	
	</div>
</div>