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

			<?php lightspeed_introduction() ?>

			<?php lightspeed_content_items() ?>

			<?php lightspeed_cta() ?>
		</div>

		<?php if ( !empty( lightspeed_get_attribute( 'gallery', array() ) ) ) : ?>
			<div class="col-lg-6 areoi-hero-media">
				<div class="h1 d-lg-none"></div>
				
				<?php lightspeed_media_carousel( lightspeed_get_attribute( 'gallery', array() ), 'square' ) ?>
			</div>
		<?php endif; ?>
	
	</div>
</div>

<?php //lightspeed_stretched_link() ?>